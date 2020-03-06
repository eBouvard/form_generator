from flask import Flask, request
from parser import parse_doc
import os.path

app = Flask(__name__, static_url_path="")

@app.route('/')
def Hello():
    return ('Hello World')

@app.route('/file')
def route_single_doc():
    path = request.args.get('path', type = str)
    #path = "/Users/vincent/c2lab/parser2/template/110419_FRAGO_01_JOC.docx"
    if not (os.path.exists(path)):
        return('Wrong path')
    return (parse_doc(path))
    

if __name__ == '__main__':
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run(host='0.0.0.0', port=int("5000"))