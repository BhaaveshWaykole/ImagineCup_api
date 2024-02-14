# Importing the required Libraries
from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS  
import joblib
from keras.models import model_from_json

app = Flask(__name__)
CORS(app)

# Load your machine learning models here

# Spending score prediction model
spending_score_model = joblib.load('SpendingScore_model.pkl') 

# Target Advice prediction model
file = open('TargetAdvice_model.json', 'r')
loaded  = file.read()
file.close()

target_advice_model = model_from_json(loaded)
target_advice_model.load_weights("TargetAdvice_model.h5")

# Asset type prediction model
file = open('AssetType_model.json', 'r')
loaded  = file.read()
file.close()

asset_type_model = model_from_json(loaded)
asset_type_model.load_weights("AssetType_model.h5")


@app.route('/')
def index():
    return "Welcome To Silver Stride AI"

# TARGET ADVICE
@app.route('/TargetAdvice', methods=['POST', 'GET'])
def TargetAdvice():
    if request.method == 'POST':
        # Retrieve input values from React
        data = request.json

        # total_net_worth 
        total_net_worth = float(data.get('total_net_worth'))
        # net_worth_stocks
        net_worth_stocks = float(data.get('net_worth_stocks')) 
        # net_worth_real_estate
        net_worth_real_estate = float(data.get('net_worth_real_estate'))
        # liquid_cash 
        liquid_cash = float(data.get('liquid_cash'))
        # avg_monthly_expenditure 
        avg_monthly_expenditure = float(data.get('avg_monthly_expenditure'))

        # Running the Model
        prediction = np.argmax(target_advice_model.predict([[total_net_worth, net_worth_stocks, net_worth_real_estate, liquid_cash, avg_monthly_expenditure]]))

        if prediction==0:
            prediction='Be Careful'
        elif prediction==1:
            prediction='Be Conservative'
        else:
            prediction='Take More Risk'

        return jsonify({'Target Advice Prediction': prediction})  
    
    else:
        return jsonify({'error': 'POST request required'})


# SPENDING SCORE
@app.route('/SpendingScore', methods=['POST', 'GET'])
def SpendingScore():
    if request.method == 'POST':
        # Retrieve input values from React
        data = request.json

        # age
        age = data.get('age')
        # gender 
        gender = data.get('gender')
        if gender=='Male':
            gender=0
        else:
            gender=1
        # marital_status
        marital_status = data.get('marital_status')
        if marital_status == 'married':
            marital_status=1
        elif marital_status=='single':
            marital_status=2
        elif marital_status=='widowed':
            marital_status=3
        else:
            marital_status=4
        # profession 
        profession = data.get('profession')
        if profession == 'artist':
            profession=1
        elif profession=='entertainment':
            profession=2
        elif profession=='lawyer':
            profession=3
        elif profession=='engineer':
            profession=4
        elif profession=='executive':
            profession=5
        elif profession=='marketing':
            profession=6
        elif profession=='homemaker':
            profession=7
        else:
            profession=8
        # monthly_income
        monthly_income = data.get('monthly_income')
        # avg_monthly_expenditure 
        avg_monthly_expenditure = data.get('avg_monthly_expenditure')

        print([age, gender, marital_status, profession, monthly_income, avg_monthly_expenditure])
        # Running the Model
        prediction = spending_score_model.predict([[age, gender, marital_status, profession, monthly_income, avg_monthly_expenditure]])
        
        if prediction==0:
            prediction='Low'
        elif prediction==1:
            prediction='Average'
        else:
            prediction='High'
        print(prediction)
        return jsonify({'Spending Score Prediction': prediction}) 
    
    else:
        return jsonify({'error': 'POST request required'})

# ASSET TYPE
@app.route('/AssetType', methods=['POST', 'GET'])
def AssetType():
    if request.method == 'POST':
        # Retrieve input values from React
        data = request.json

        # age
        age = int(data.get('age'))
        # marital_status
        marital_status = data.get('marital_status')
        if marital_status == 'married':
            marital_status=1
        elif marital_status=='single':
            marital_status=2
        elif marital_status=='widowed':
            marital_status=3
        else:
            marital_status=4
        # profession 
        profession = data.get('profession')
        if profession == 'artist':
            profession=1
        elif profession=='entertainment':
            profession=2
        elif profession=='lawyer':
            profession=3
        elif profession=='engineer':
            profession=4
        elif profession=='executive':
            profession=5
        elif profession=='marketing':
            profession=6
        elif profession=='homemaker':
            profession=7
        else:
            profession=8
        # monthly_income
        monthly_income = float(data.get('monthly_income'))
        # avg_monthly_expenditure 
        avg_monthly_expenditure = float(data.get('avg_monthly_expenditure'))

        print([age, marital_status, profession, monthly_income, avg_monthly_expenditure])
        # Running the Model
        prediction = np.argmax(asset_type_model.predict([[age, marital_status, profession, monthly_income, avg_monthly_expenditure]]))
        
        if prediction==0:
            prediction='FD'
        elif prediction==1:
            prediction='Mutual Funds'
        elif prediction==2:
            prediction='Real Estate'
        else:
            prediction='Stocks'

        print(prediction)
        return jsonify({'Asset Type Prediction': prediction}) 
    
    else:
        return jsonify({'error': 'POST request required'})


if __name__ == '__main__':
    app.run(port=1000, debug=True)