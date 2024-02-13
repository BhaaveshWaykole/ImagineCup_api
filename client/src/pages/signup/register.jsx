// import { useRef, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

import {
  Typography,
} from "@material-tailwind/react";
import './register.css';
import logoImage from './LOGO-NO BG.png';

import axios from 'axios'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
//Register Page of App :- 

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
  const navLogin = useNavigate()
  // const navigateTo = useNavigate();

  // //Refrences for input fields for register form.
  // const emailRef = useRef();
  // const userNameRef = useRef();
  // const passwordRef = useRef();
  // const passwordAgainRef = useRef();
  // const { user, isFetching, error, dispatch } = useContext(AuthContext)

  // const handleClick = async (e) => {
  //     e.preventDefault();
  //     if (passwordAgainRef.current.value !== passwordRef.current.value) {
  //         // setCustomValidity -> to set or display popup to tht field saying specifid text
  //         passwordRef.current.setCustomValidity('Passwords don\'t match')
  //         // console.log('Passwords dont match')
  //     } else { // i.e user is not registered :- create user and add them to backend.
  //         const user = {
  //             username: userNameRef.current.value,
  //             email: emailRef.current.value,
  //             password: passwordRef.current.value
  //         }
  //         try {
  //             await axios.post('/api/auth/register', user)
  //             // console.log(JSON.stringify(user))
  //             navigateTo('/login')
  //         } catch (err) {
  //             console.log(JSON.stringify(err))
  //             // console.log("I")
  //         }
  //     }
  // }
  const registerUser =async(e)=>{
    e.preventDefault();
    const username = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await axios.post("/api/auth/register",{username, email, password})
    console.log(JSON.stringify(res.data));
    try{
      if (res.status) {
        const goLogin = () => {
          navLogin('/')
        }
        goLogin()
      }}catch(err){
        console.log(err)
      }
  }
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

        <form onSubmit = {registerUser} className='mt-5'>
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
            <button className='bg-black text-white px-6 py-3 rounded-xl hover:bg-black-600 focus:outline-none'>
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