"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import qrcode

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route("/allusers", methods=["GET"])
def get_users():
    users = User.query.all()
    users_serialized = list(map(lambda x: x.serialize(), users)) 
    return jsonify(users_serialized), 200

@api.route('/get_user/<email>', methods=['GET'])
def get_user(email):
    user = User.query.filter_by(email=email).first()
    return jsonify(user), 200


@api.route('/save_user', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(**data)
    db.session.commit()
    return jsonify("User created"), 200


@api.route('/get_qr', methods=['POST'])
def create_qr():
    data = request.get_json()
    print(data)
    img = qrcode.make(f'https://3000-gray-impala-tny62805.ws-us17.gitpod.io/{data["username"]}')
    img.save("qr.png")
    return {"message":"ok"}, 200