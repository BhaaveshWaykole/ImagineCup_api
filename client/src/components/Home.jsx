import { Sidebar } from './Sidebar.jsx';  
import {
    Typography
} from "@material-tailwind/react";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contex/AuthContext.jsx';
export function Home() {
    // const params = useParams()
    const user = useContext(AuthContext)
    console.log(user.user._id)
    return (
            <div className="flex gap-7 bg-black-bg">
                <Sidebar/>
                <div className='grid place-items-center h-screen w-full' >
                    <Typography className='font-poppins-800 text-sky-300 text-3xl font-bold'>Welcome to Silver Stride</Typography>
                </div>
            </div>
    )
}