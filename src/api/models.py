from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=True)
	last_name = db.Column(db.String(120), unique=False, nullable=True)
	company = db.Column(db.String(120), unique=False, nullable=True)
	zip_code = db.Column(db.String(120), unique=False, nullable=True)
	job_title = db.Column(db.String(500), unique=False, nullable=True)
	slogan = db.Column(db.String(500), unique=False, nullable=True)
	description = db.Column(db.String(4000), unique=False, nullable=True)
	phone = db.Column(db.String(20), unique=False, nullable=True)
	email = db.Column(db.String(120), unique=False, nullable=True)
	instagram = db.Column(db.String(200), unique=False, nullable=True)
	facebook = db.Column(db.String(200), unique=False, nullable=True)
	twitter = db.Column(db.String(200), unique=False, nullable=True)
	youtube = db.Column(db.String(200), unique=False, nullable=True)
	linkedin = db.Column(db.String(200), unique=False, nullable=True)
	tiktok = db.Column(db.String(200), unique=False, nullable=True)
	behance = db.Column(db.String(200), unique=False, nullable=True)
	snapchat = db.Column(db.String(200), unique=False, nullable=True)
	maps = db.Column(db.String(200), unique=False, nullable=True)
	website = db.Column(db.String(200), unique=False, nullable=True)
	sector = db.Column(db.String(200), unique=False, nullable=True)
	username = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "is_active": self.is_active,
            "name": self.name,
            "last_name": self.last_name,
            "company": self.company,
            "zip_code": self.zip_code,
            "job_title": self.job_title,
            "slogan": self.slogan,
            "description": self.description,
            "phone": self.phone,
            "email": self.email,
            "instagram": self.instagram,
            "facebook": self.facebook,
            "twitter": self.twitter,
            "youtube": self.youtube,
            "linkedin": self.linkedin,
            "tiktok": self.tiktok,
            "behance": self.behance,
            "snapchat": self.snapchat,
            "maps": self.maps,
            "website": self.website,
            "sector": self.sector,
            "username": self.username,
        }
