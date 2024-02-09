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
        <div className="profileRtCover flex justify-center h-28 mb-5">
          {/* do relative position later if needed */}
          <img src="download.jpeg" alt="IMG" className="rounded-full h-28" />
        </div>
        <Card>
          <div className="flex gap-7 py-10 justify-center">
            <Typography className="m-2">
              Username :
              <input
                label="Username"
                type="text"
                name="Username"
                placeholder="Username"
                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography>
            <Typography className="m-2">
              Email :
              <input
                label="Username"
                type="text"
                name="Email"
                placeholder="Email"
                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography>
            <Typography className="m-2">
              Occupation :
              <input
                label="occupation"
                type="text"
                name="occupation"
                placeholder="Occupation"
                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography>
          </div>
          <div className='flex justify-center'>
            <Typography className="m-2">
              Income :
              <input
                label="income"
                type="text"
                name="income"
                placeholder="income"
                className='rounded-lg border-2 border-fuchsia-900 px-1 ml-1'
              />
            </Typography>
            <Typography className="m-2">
              Monthly income :
              <input
                label="monthly income"
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
            </Typography>
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
