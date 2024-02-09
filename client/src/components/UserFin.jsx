import React from 'react'

import {
    Input,
    Typography,
    Card
} from "@material-tailwind/react";

export default function Profile() {
    return (
        <div className="h-screen bg-fuchsia-300 flex flex-col items-center justify-center">
            <div className="bg-fuchsia-100 rounded-3xl p-10">
                <div className="profileRtCover flex justify-center h-28">
                    {/* do relative position later if needed */}
                    <Typography className="text-purple-900 font-bold text-5xl">Enter Your Financial Information </Typography>
                    <span>Enter amount in Rupees</span>
                </div>
                <Card>
                    <div className="flex gap-7 py-10 justify-center">
                        <Typography className="m-2">
                            Total Net Worth :
                            <input
                                label="Username"
                                type="text"
                                name="Username"
                                placeholder="Net Worth"
                                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
                            />
                        </Typography>
                        <Typography className="m-2">
                            Net invested in Stocks :
                            <input
                                label="Username"
                                type="text"
                                name="Email"
                                placeholder="Stocks"
                                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
                            />
                        </Typography>
                        <Typography className="m-2">
                            Net invested in Real Eastate :
                            <input
                                label="Real Eastate"
                                type="text"
                                name="Real Eastate"
                                placeholder="Real Eastate"
                                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
                            />
                        </Typography>
                    </div>
                    <div className='flex justify-center'>
                        <Typography className="m-2">
                            Net total in Cash :
                            <input
                                label="Cash"
                                type="text"
                                name="Cash"
                                placeholder="Cash"
                                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
                            />
                        </Typography>
                        {/* <Typography className="m-2">
              Monthly income :
              <input
                label="Monthly income"
                type="text"
                name="monthly income"
                placeholder="monthly income"
                className='rounded-lg  border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography>
            <Typography className="m-2">
              Relationship :
              <input
                label="Relationship"
                type="text"
                name="Relationship"
                placeholder="Relationship"
                className='rounded-lg  border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography>
            <Typography className="m-2">
              Age :
              <input
                label="Age"
                type="text"
                name="Age"
                placeholder="Age"
                className='rounded-lg  border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography> */}
                    </div>
                    <button type="submit" className="flex justify-center">
                        <div className="bg-orange-900 text-white w-fit border-2 border-fuchsia-900 rounded-lg px-2 mb-3">
                            <Typography>Submit</Typography>
                        </div>
                    </button>
                </Card>
            </div>
        </div>
    )
}
