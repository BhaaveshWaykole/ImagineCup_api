from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/generate-number')
def generate_number():
    generated_number = random.randint(1, 1000)
    return jsonify({"number": generated_number})

if __name__ == '__main__':
    app.run(debug=True)
