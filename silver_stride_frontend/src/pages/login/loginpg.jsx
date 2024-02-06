import { useContext, useRef } from "react";

import {
    Typography,
    Spinner
} from "@material-tailwind/react";

import { loginCall } from "../../apiCalls.js";
import { AuthContext } from "../../contex/AuthContex.jsx"

export default function Login() {
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
                            Login
                        </Typography>
                    </div>
                    <form className='Form mt-5' onSubmit={handleClick}>
                        <div className="InputUser mb-3">
                            <input
                                label='Email'
                                required
                                className='p-2 rounded-xl'
                                type="email"
                                placeholder='Username/email'
                                ref={emailRef} />
                        </div>
                        <div className="InputPass mb-3">
                            <input
                                label='Password'
                                required
                                className='p-2 rounded-xl'
                                type='password'
                                placeholder='Password'
                                ref={passwordRef} />
                        </div>
                        <div className='SubmitBtn flex flex-col items-center'>
                            <button className="subBtn bg-black-bg text-white-e px-4 py-1 rounded-xl" disabled={isFetching}>
                                {isFetching ?
                                    <Spinner />
                                    : "Submit"}
                            </button>
                            <span className='frgt-pass mt-2 cursor-pointer text-neutral-900'>Forgot Password ?</span>
                            <button className="subBtn bg-green-500 text-white-e px-4 py-1 rounded-xl" disabled={isFetching}>
                                {isFetching ?
                                    <Spinner />
                                    : "Create new account"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}