from flask import Flask
from parser import parse_doc

app = Flask(__name__, static_url_path="")

@app.route('/hello')
def Hello():
    return ('Hello World')

@app.route('/hello')
def Hello():
    return ('Hello World')


if __name__ == '__main__':
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run(host='0.0.0.0', port=int("5000"))