import {
  Typography,
} from "@material-tailwind/react";
import logoImage from './LOGO-NO BG.png';

import {
  Link,
} from "react-router-dom";

import axios from 'axios'
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navHome = useNavigate()

  const { dispatch } = useContext(AuthContext)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [userdata, setUser] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setIsLoading(true)
    setError(null)

    const res = await axios.post("/api/auth/login", { email, password });
    if (!res.ok) {
      console.log(res.data.error); // Use specific error message
    }
    // console.log(res.data.username)
    localStorage.setItem("user", JSON.stringify(res.username));
    dispatch({ type: 'LOGIN', payload: res.data }); // Dispatch login action
    setIsLoading(false); 
    // console.log("HERE" + res.data._id)
    const goHome = () => {
      navHome(`/home/${res.data._id}`)
    }
    goHome()


    // try {
    //   const res = await axios.post("/api/auth/login", { email, password })
    //   console.log(JSON.stringify(res.data));
    //   console.log(res.data._id)
    //   if (res.status) {
    //     const goHome = () => {
    //       navHome(`/home/${res.data._id}`)
    //     }
    //     goHome()
    //   } else {
    //     const error = document.getElementById("error")
    //     error.innerHTML = "Login failed"
    //     error.style.color = "white"
    //   }
    //   // console.log(res.status)
    // } catch (err) {
    //   console.log(err)
    // }
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
            Login
          </Typography>
        </div>

        <form className='mt-5' onSubmit={handleLogin}>
          <div className='mt-3'>
            <input
              className='p-3 rounded-xl w-full border focus:outline-none focus:border-purple-500'
              placeholder='Email'
              required
              type='text'
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


          <div className='flex flex-col items-center mt-5'>
            {/* <Link to="/home"> */}
            <button className='bg-black text-white px-6 py-3 rounded-xl hover:bg-black-600 focus:outline-none'>
              Login
            </button>
            {/* </Link> */}
            <Link to="/register">
              <span className='mt-2 cursor-pointer text-gray-800'>
                Dont have an account? Sign Up Now
              </span>
            </Link>
          </div>
        </form>
        <div id="error">

        </div>
      </div>
    </div>
  );
}