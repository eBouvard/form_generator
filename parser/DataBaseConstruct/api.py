import os, time
from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_cors import CORS
from pathlib import Path
from werkzeug.utils import secure_filename
from zipfile import ZipFile
from redis import Redis
from rq import Queue
import split

#Configuration and Ping route

UPLOAD_FOLDER = 'raw_data'
OUTPUT_FOLDER = 'output'
ALLOWED_EXTENSIONS = {'mp3'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

app = Flask(__name__, static_folder="static", static_url_path="", template_folder="template")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER
CORS(app)

q = Queue(connection=Redis())

@app.route('/ping', methods=['GET'])
def hello_world():
    print('hello world')
    
print('test')