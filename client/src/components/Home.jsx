import { Sidebar } from './Sidebar.jsx';  
import {
    Typography
} from "@material-tailwind/react";
import { useParams } from 'react-router-dom';

export function Home() {
    
    // const params = useParams()
    // console.log(params)
    return (
            <div className="flex gap-7 bg-black-bg">
                <Sidebar/>
                <div className='grid place-items-center h-screen w-full' >
                    <Typography className='font-poppins-800 text-sky-300 text-3xl font-bold'>Welcome to Silver Stride</Typography>
                </div>
            </div>
    )
}