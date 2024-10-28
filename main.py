from flask import render_template
from flask_socketio import SocketIO, send
from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def home():
    return render_template('index.html')

@socketio.on('message')
def handle_message(msg):
    print('Message: ' + msg)
    send(msg, broadcast=True)  # Отправка сообщения всем подключенным клиентам

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)  # Запуск на всех интерфейсах