import { Sidebar } from './Sidebar.jsx';
import {
    Card,
    Typography
} from "@material-tailwind/react";

export function Home() {
    return (
        <div>
            <div className="flex gap-7 bg-black-bg">
                <Sidebar />
                <div className='grid place-items-center h-screen w-full' >
                    <Typography className='font-poppins-800 text-sky-300 text-3xl font-bold'>Welcome to Silver Stride</Typography>
                </div>
            </div>
        </div>
    )
}