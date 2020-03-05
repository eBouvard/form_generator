from flask import Flask
from parser import parse_doc

app = Flask(__name__, static_url_path="")

@app.route('/hello')
def Hello():
    return ('Hello World')

@app.route('/')
def route():
    path_opord = "/Users/augustinbaudoin/Desktop/110419_FRAGO_01_JOC.docx"
    return parse_doc(path_opord)

if __name__ == '__main__':
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run(host='0.0.0.0', port=int("5000"))