// src/components/Assets.jsx
import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar.jsx';
const UserFin = () => {
  const [inputs, setInputs] = useState({
    networth:'',
    stocks:'',
    realestate:'',
    cash:'',
    avgMonthlyExpenditure:'', // Added assetType to stat
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Form submitted:', inputs);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-zinc-900">
   
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-slate-400 to-slate-400 rounded-lg shadow-md" >
      <h1 className="text-2xl font-bold mb-6">User Financial Details</h1>
      <h6>Enter Amount in Rupees</h6>
      <br/>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="mb-4">
          <label htmlFor="networth" className="block text-sm font-semibold text-black">Net Worth</label>
          <input type="text" id="networth" name="networth" value={inputs.networth} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="stocks" className="block text-sm font-semibold text-black">Total Stock Value</label>
          <input type="text" id="stocks" name="stocks" value={inputs.stocks} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="realestate" className="block text-sm font-semibold text-black">Total Real Estate Value</label>
          <input type="text" id="realestate" name="realestate" value={inputs.realestate} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="cash" className="block text-sm font-semibold text-black">Total Liquid Cash</label>
          <input type="text" id="cash" name="cash" value={inputs.cash} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="avgMonthlyExpenditure" className="block text-sm font-semibold text--black">Re-enter Average Monthly Expenditure</label>
          <input type="text" id="avgMonthlyExpenditure" name="avgMonthlyExpenditure" value={inputs.avgMonthlyExpenditure} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        
        <div className="col-span-full mt-4">
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UserFin;
