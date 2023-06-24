from flask import Blueprint, render_template, request
import sqlite3


views = Blueprint('views', __name__)


@views.route('/index/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        email = request.form['email']
        conn = sqlite3.connect('instance/database.db')
        c = conn.cursor()
        c.execute('''
        CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE
        )
    ''')
        c.execute("INSERT INTO subscribers (email) VALUES (?)", (email,))
        conn.commit()
        conn.close()
        return 'Email submitted successfully'
    return render_template("index.html")


@views.route('/albums/', methods=['GET'])
def albums():
    return render_template("albums.html")


