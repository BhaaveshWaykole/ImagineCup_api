import React from 'react';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import {
    Typography,
} from "@material-tailwind/react";

//Register Page of App :- 

export default function Register() {
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
    return (
        <div>
            <div className='Login h-screen flex items-center justify-center bg-purple-100'>
                <div>
                    <Typography className='text-5xl text-black mr-10 font-poppins-800'>
                        Silver Stride
                    </Typography>
                </div>
                <div className='flex flex-col border-2 border-black py-20 px-32 bg-purple-50 rounded-xl'>
                    <div className='LoginHead'>
                        <Typography className='text-6xl text-center text-black font-poppins-800'>
                            SignUp
                        </Typography>
                    </div>

                    <form onSubmit={handleClick}>
                        <div className='Form mt-5'>
                            <div className="InputUser mb-3" >
                                <input
                                    label='Username'
                                    className='p-2 rounded-xl w-full'
                                    placeholder='Username'
                                    required
                                    type='text'
                                    ref={userNameRef} />
                            </div>
                            <div className="InputEmail mb-3" >
                                <input
                                    label='Email'
                                    className='p-2 rounded-xl w-full'
                                    placeholder='Email'
                                    required
                                    type='email'
                                    ref={emailRef} />
                            </div>
                            <div className="InputPass mb-3" >
                                <input
                                    label='Password'
                                    className='p-2 rounded-xl w-full'
                                    placeholder='Password'
                                    required
                                    type='password'
                                    ref={passwordRef} />
                            </div>
                            <div className="InputPassAgn mb-3" >
                                <input label='Password Again'
                                    className='p-2 rounded-xl w-full'
                                    placeholder='Enter Password Again'
                                    required type='password'
                                    ref={passwordAgainRef} />
                            </div>
                        </div>
                        <div className='SubmitBtn flex flex-col items-center'>
                            {/* <button type='submit' className="subBtn">
                                Submit
                            </button> */}
                            <button className="subBtn bg-black-bg text-white-e px-4 py-1 rounded-xl">
                                Submit
                            </button>
                            <span className="creatAcc mt-2 cursor-pointer text-neutral-900">Login to your Existing account ?</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}