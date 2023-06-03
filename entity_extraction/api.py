from flask import Flask, request, jsonify
from main import extract_entity

app = Flask(__name__)

@app.route('/api/extract_items', methods=['POST'])
def extract_vegetables():
    data = request.get_json()
    sentence = data['sentence']

    item, quantity = extract_entity(sentence)

    # Create a response payload with extracted data
    print(item, quantity)

    response = {
        'data': [
            {'name': str(name), 'quantity': str(quantity)}
            for name, quantity in zip(item, quantity)
        ]
    }
    print(response)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)