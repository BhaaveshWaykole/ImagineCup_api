// src/components/Assets.jsx
import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar.jsx';

const Assets = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [profession, setProfession] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [avgMonthlyExpenditure, setAvgMonthlyExpenditure] = useState('');
  const [prediction, setPrediction] = useState('');

  const generatePred = () => {
    const requestData = {
      age,
      gender,
      marital_status: maritalStatus,
      profession,
      monthly_income: monthlyIncome,
      avg_monthly_expenditure: avgMonthlyExpenditure,
    };

    fetch('http://127.0.0.1:1000/SpendingScore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setPrediction(data['Spending Score Prediction']);
        })
        .catch((error) => {
          console.error('Error generating quote:', error);
        });
    const pred=document.getElementById("spendingscore")
    console.log(prediction)
    pred.innerHTML="Your Spending Score is "+ prediction;
  };

  // const handleModel1 = () => {
  //   // console.log("clicked")
  //   const a = document.getElementById("Model1")
  //   a.innerHTML = "Low spending rate"
  //   a.style.color = "white"
  //   a.style.backgroundColor = "green"
  // }
  const handleModel2 = () => {
    // console.log("clicked")
    const a = document.getElementById("Model2")
    a.innerHTML = "SilverAI suggests you should go FD"
    a.style.color = "white"
    a.style.backgroundColor = "blue"
  }
  return (
    <div className="flex min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-zinc-900">
      <Sidebar />
      <div className="flex flex-col max-w-4xl mx-auto p-6 bg-gradient-to-r from-slate-400 to-slate-400 rounded-lg shadow-md" >
        <h1 className="text-2xl font-bold mb-6">User Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-semibold text-black">Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <label className="block text-sm font-semibold text-black">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Mle">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="maritalStatus" className="block text-sm font-semibold text-black">Marital Status</label>
            <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block text-sm font-semibold text-black">Profession</label>
            <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="monthlyIncome" className="block text-sm font-semibold text-black">Monthly Income</label>
            <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="avgMonthlyExpenditure" className="block text-sm font-semibold text--black">Average Monthly Expenditure</label>
            <input type="number" value={avgMonthlyExpenditure} onChange={(e) => setAvgMonthlyExpenditure(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="col-span-full mt-4 flex gap-7">
            <button type="submit" onClick={generatePred} className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Spending Score</button>
            {/* {prediction && (
              <div className='rounded-xl p-3 mt-5'>
                <h1>Generated Prediction</h1>
                <p>{prediction}</p>
              </div>
            )} */}
            {/* <button type="submit" onClick={handleModel2} className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Personalized Silver Advice</button> */}
          </div>
          <div id="spendingscore" className='rounded-xl p-3 mt-5'>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
