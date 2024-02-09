// src/components/Assets.jsx
import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar.jsx';
const Assets = () => {
  const [inputs, setInputs] = useState({
    age: '',
    maritalStatus: '',
    profession: '',
    monthlyIncome: '',
    avgMonthlyExpenditure: '',
    assetType: '',
    gender: '', // Added gender to stat
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
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-semibold text-black">Age</label>
          <input type="text" id="age" name="age" value={inputs.age} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <label className="block text-sm font-semibold text-black">Gender</label>
          <select
            id="gender"
            name="gender"
            value={inputs.gender}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="maritalStatus" className="block text-sm font-semibold text-black">Marital Status</label>
          <input type="text" id="maritalStatus" name="maritalStatus" value={inputs.maritalStatus} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="profession" className="block text-sm font-semibold text-black">Profession</label>
          <input type="text" id="profession" name="profession" value={inputs.profession} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="monthlyIncome" className="block text-sm font-semibold text-black">Monthly Income</label>
          <input type="text" id="monthlyIncome" name="monthlyIncome" value={inputs.monthlyIncome} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="avgMonthlyExpenditure" className="block text-sm font-semibold text--black">Average Monthly Expenditure</label>
          <input type="text" id="avgMonthlyExpenditure" name="avgMonthlyExpenditure" value={inputs.avgMonthlyExpenditure} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        
        <div className="col-span-full mt-4 flex gap-7">
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Model 1</button>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600">Model 2</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Assets;
