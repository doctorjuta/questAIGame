from flask import Flask
from flask import render_template, session, request
from dotenv import load_dotenv
import os


load_dotenv()


app = Flask(__name__)
app.secret_key = bytes(os.getenv('SESSION_SECRET'), 'UTF-8')


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/r/name', methods=['GET', 'POST'])
def name():
    args = {
        'username': "",
    }
    if 'username' in session:
        args['username'] = session['username']
    if request.method == 'POST':
        if 'username' in request.json:
            session['username'] = request.json['username']
            args['username'] = request.json['username']
    return args


@app.route('/r/start', methods=['GET', 'POST'])
def start():
    args = {
        'page_title': "Погнали",
        'username': "User"
    }
    if 'username' in session:
        args['username'] = session['username']
    return render_template(
        'quest.html',
        args
    )