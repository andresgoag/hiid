"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import qrcode

from flask import Flask, request, jsonify, url_for, Blueprint, send_file
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route("/allusers", methods=["GET"])
def get_users():
    users = User.query.all()
    users_serialized = list(map(lambda x: x.serialize(), users)) 
    return jsonify(users_serialized), 200

@api.route('/get_user/<username>', methods=['GET'])
def get_user(username):
    user = User.query.filter_by(username=username).first()
    if user:
        return jsonify(user.serialize()), 200
    return None

@api.route('/save_user', methods=['POST'])
def register():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    print(data['email'])
    if user:
        return jsonify({
            "message":"User already exists",
            "status": False
        }), 400

    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify({
        "message":"User created successfully",
        "status": True,
        "user": user.serialize()
    }), 200

@api.route('/update_user', methods=['PUT'])
def update_user():
    data = request.get_json()
    user = User.query.get(data['id'])
    db.session.delete(user)
    updated_user = User(**data, password=user.password)
    db.session.add(updated_user)
    db.session.commit()
    return {"user": updated_user.serialize(), "status": True}, 200

@api.route('login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    print(user)
    if user:
        if user.password == data['password']:
            return jsonify({
                "message": "ok",
                "status": True,
                "user": user.serialize()
            }), 200
        
        return jsonify({
            "message": "Wrong email or password",
            "status": False
        }), 400
    
    return jsonify({
        "message": "Wrong email or password",
        "status": False
    }), 400

@api.route('/get_qr', methods=['POST'])
def create_qr():
    data = request.get_json()
    print(data)
    img = qrcode.make(f'https://3000-gray-impala-tny62805.ws-us20.gitpod.io/{data["username"]}')
    img.save("qr.png")
    return {"message":"ok"}, 200

@api.route('/get_contact', methods=['POST'])
def get_contact():
    data = request.get_json()

    contact = (
    f"BEGIN:VCARD\n"
    f"VERSION:3.0\n"
    f"PRODID:-//Apple Inc.//iPhone OS 14.4//EN\n"
    f"N:{data['last_name']} - {data['company']};{data['name']} ;;;\n"
    f"FN:{data['name']} {data['last_name']} - {data['company']}\n"
    f"ORG:{data['job_title']};\n"
    f"EMAIL;type=INTERNET;type=WORK;type=pref:{data['email']}\n"
    f"TEL;type=CELL;type=VOICE;type=pref:{data['phone']}\n"
    f"URL;type=WORK;type=pref:{data['website']}\n"
    f"END:VCARD\n"
    )

    contact_file = open("src/contact.vcf", "w")
    contact_file.write(contact)
    contact_file.close()

    return send_file("contact.vcf", mimetype='text/vcard')