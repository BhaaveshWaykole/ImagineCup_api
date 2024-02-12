import { useContext, useRef } from "react";

import {
  Typography,
  Spinner
} from "@material-tailwind/react";
import logoImage from './LOGO-NO BG.png';

import {
  Link,
} from "react-router-dom";

import { useNavigate } from "react-router-dom";
//Register Page of App :- 
// import { loginCall } from "../../apiCalls.js";
// import { AuthContext } from "../../contex/AuthContex.jsx"

export default function Login() {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('/home')
  }
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const { user, isFetching, error, dispatch } = useContext(AuthContext)

  // const handleClick = (e) => {
  //     // e.preventDefault(); // Prevents the default form submission behavior
  //     // console.log('hi');
  //     e.preventDefault();
  //     loginCall(
  //         { email: emailRef.current.value, password: passwordRef.current.value },
  //         dispatch
  //     );
  //     console.log(emailRef.current.value);
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
            Login
          </Typography>
        </div>

        <form className='mt-5'>
          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Username'
              required
              type='text'
            />
          </div>

          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Password'
              required
              type='password'
            />
          </div>


          <div className='flex flex-col items-center mt-5'>
            <Link to="/home">
              <button className='bg-black text-white px-6 py-3 rounded-xl hover:bg-black-600 focus:outline-none'>
                Login
              </button>
            </Link>
            <Link to="/register">
              <span className='mt-2 cursor-pointer text-gray-800'>
                Don't have an account? Sign Up Now
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};