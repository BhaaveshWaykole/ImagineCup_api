// src/components/Assets.jsx
import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar.jsx';
const UserFin = () => {
  const [totalNetWorth, setTotalNetWorth] = useState('');
  const [netWorthStocks, setNetWorthStocks] = useState('');
  const [netWorthRealEstate, setNetWorthRealEstate] = useState('');
  const [liquidCash, setLiquidCash] = useState('');
  const [avgMonthlyExpenditure, setAvgMonthlyExpenditure] = useState('');
  const [prediction, setPrediction] = useState('');

  const generatePred = () => {
    const requestData = {
      total_net_worth: totalNetWorth,
      net_worth_stocks: netWorthStocks,
      net_worth_real_estate: netWorthRealEstate,
      liquid_cash: liquidCash,
      avg_monthly_expenditure: avgMonthlyExpenditure,
    };

    fetch('http://127.0.0.1:1000/TargetAdvice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setPrediction(data['Target Advice Prediction']);
        })
        .catch((error) => {
          console.error('Error generating quote:', error);
        });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-zinc-900">
      <Sidebar />
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-slate-400 to-slate-400 rounded-lg shadow-md" >
        <h1 className="text-2xl font-bold mb-6">User Financial Details</h1>
        <h6>Enter Amount in Rupees</h6>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mb-4">
            <label htmlFor="networth" className="block text-sm font-semibold text-black">Net Worth</label>
            <input type="number" id="networth" name="networth" value={totalNetWorth} onChange={(e) => setTotalNetWorth(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="stocks" className="block text-sm font-semibold text-black">Total Stock Value</label>
            <input type="number" id="stocks" name="stocks" value={netWorthStocks}onChange={(e) => setNetWorthStocks(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="realestate" className="block text-sm font-semibold text-black">Total Real Estate Value</label>
            <input type="number" id="realestate" name="realestate" value={netWorthRealEstate} onChange={(e) => setNetWorthRealEstate(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="cash" className="block text-sm font-semibold text-black">Total Liquid Cash</label>
            <input type="text" id="cash" name="cash" value={liquidCash} onChange={(e) => setLiquidCash(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="avgMonthlyExpenditure" className="block text-sm font-semibold text--black">Re-enter Average Monthly Expenditure</label>
            <input type="number" id="avgMonthlyExpenditure" name="avgMonthlyExpenditure" value={avgMonthlyExpenditure} onChange={(e) => setAvgMonthlyExpenditure(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="col-span-full mt-4">
            <button type="submit" onClick={generatePred} className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </div>
        {prediction && (
                <div className='rounded-xl p-3 mt-5'> 
                  <h1>Generated Prediction {prediction}</h1>
                </div>
              )}
      </div>
    </div>
  );
};

export default UserFin;
