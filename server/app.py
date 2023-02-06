from flask import Flask, request, send_file, send_from_directory
import subprocess
import json
import socket
import os

app = Flask(__name__)

PORT = os.environ['PORT']
CLIENT_DIR = '../client/build'

LAYOUT_FILE = 'layout.json'
BUTTONS_FILE = 'buttons.json'
DEFAULT_LAYOUT_FILE = {
    "layout": [["example_button", "example_button"], ["example_button"]]
}
DEFAULT_BUTTONS_FILE = {
    "buttons": {
        "example_button": {
            "name": "Example Button",
            "icon": "example_button",
            "command": "echo Hello World!"
        }
    }
}


def try_load_layout():
    try:
        with open(LAYOUT_FILE) as f:
            return json.load(f)
    except FileNotFoundError:
        with open(LAYOUT_FILE, 'w') as f:
            json.dump(DEFAULT_LAYOUT_FILE, f)
        with open(LAYOUT_FILE) as f:
            return json.load(f)


def try_load_buttons():
    try:
        with open(BUTTONS_FILE) as f:
            return json.load(f)
    except FileNotFoundError:
        with open(BUTTONS_FILE, 'w') as f:
            json.dump(DEFAULT_BUTTONS_FILE, f)
        with open(BUTTONS_FILE) as f:
            return json.load(f)


# ------
# INIT
# ------
def load_layout_and_buttons():
    return try_load_layout()['layout'], try_load_buttons()['buttons']


LAYOUT, BUTTONS = load_layout_and_buttons()
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
intro = '\n\n\n--------------------------------------\n'
intro += f'MPAD running on device {hostname}\n'
intro += f'Connect to the client at the address:\n {IPAddr}:{PORT}\n'
print(intro)


# ------
# ROUTES
# ------
@app.route("/")
def home():
    return send_from_directory(CLIENT_DIR, 'index.html')


@app.route("/<path:path>")
def base(path):
    return send_from_directory(CLIENT_DIR, path)


@app.route("/reload_config")
def reload_config():
    global LAYOUT
    global BUTTONS
    LAYOUT, BUTTONS = load_layout_and_buttons()
    return '', 200


@app.route("/get_icon")
def get_icon():
    icon_name = request.args.get('name')
    filename = f'icons/{icon_name}.jpg'
    return send_file(filename, mimetype='image/jpeg')


@app.route("/get_layout")
def get_layout():
    with open('layout.json') as f:
        return json.load(f)['layout']


@app.route("/get_buttons")
def get_buttons():
    return BUTTONS


@app.route("/run_button")
def run_button():
    btn_name = request.args.get('name')
    if btn_name == '':
        return "No button name provided", 400
    else:
        cmd = BUTTONS[btn_name]["command"]
        if cmd == '':
            return "Malformed or missing command", 400

        subprocess.Popen(cmd.split())
        return '', 200
