// import { useRef, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

import {
  Typography,
} from "@material-tailwind/react";
import './register.css';
import logoImage from './LOGO-NO BG.png';

import axios from 'axios'
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { AuthContext } from "../../contex/AuthContext";
//Register Page of App :- 

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
  const navLogin = useNavigate()

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user, dispatch } = useContext(AuthContext)

  const loginPg = () => {
    navLogin('/')
  }
  const registerUser = async (e) => {
    console.log("in")
    setIsLoading(true)
    setError(null)

    e.preventDefault();
    const username = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await axios.post("/api/auth/register", { username, email, password });

    if (!res.ok) {
      console.log(res.data.error); // Use specific error message
    }
    // const user = res.data; // Retrieve user data from response
    localStorage.setItem("user", JSON.stringify(res.username)); // Use "username" key and extracted username
    dispatch({ type: 'LOGIN', payload: res }); // Dispatch login action
    setIsLoading(false); // Set loading state to false
  }
  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   const username = userNameRef.current.value;
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;
  //   console.log(username)
  //   const res = await axios.post("/api/auth/register", { username, email, password })
  //   console.log(JSON.stringify(res.data));
  //   try {
  //     if (res.status) {
  //       const goLogin = () => {
  //         navLogin('/')
  //       }
  //       goLogin()
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-zinc-900">
      <div className='flex items-center text-center'>
        <img
          className='mb-0 transform -rotate-90 mr-4' // Adjust rotation and margin based on your preference
          src={logoImage}
          alt='Logo'
          style={{ width: '100px', height: 'auto' }}
        />
        <Typography className='text-5xl text-white font-times-new-roman mr-4'>
          Silver Stride AI
        </Typography>
      </div>
      <div className='flex flex-col border-1 border-gray py-20 px-32 bg-gradient-to-r from-slate-400 to-slate-400 rounded-xl shadow-lg'>
        <div className='text-center'>
          <Typography className='text-6xl text-white font-times-new-roman'>
            SignUp
          </Typography>
        </div>

        <form onSubmit={registerUser} className='mt-5'>
          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Username'
              required
              type='text'
              ref={userNameRef}
            />
          </div>
          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Email'
              required
              type='email'
              ref={emailRef}
            />
          </div>
          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Password'
              required
              type='password'
              ref={passwordRef}
            />
          </div>
          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Enter Password Again'
              required
              type='password'
            />
          </div>

          <div className='flex flex-col items-center mt-5'>
            <button type="button" className='bg-black text-white px-6 py-3 rounded-xl hover:bg-black-600 focus:outline-none' onClick={registerUser}>
              Submit
            </button>
            <Link to='/'>
              <span className='mt-2 cursor-pointer text-gray-800'>
                Login to your Existing account?
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}