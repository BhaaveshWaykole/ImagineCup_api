import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ChartBarSquareIcon,
  ArrowTrendingUpIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";
import logoImage from './LOGO-NO BG.png';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from ".././contex/AuthContext.jsx"

export function Sidebar() {
  const user = useContext(AuthContext)
  // console.log(user.user._id)
  const [userName, setUserName] = useState('')
  const fetchUser = async () => {
    const name = await axios.get(`/api/usergen/${user.user._id}`)
    // console.log(name)
    setUserName(name.data)
  }
  useEffect(() => {
    fetchUser()
  }, [])
  console.log(userName.username)
  return (
    <Card className="w-1/6 rounded-none shadow-2xl shadow-blue-gray-900/5 h-screen flex flex-col" style={{ backgroundImage: 'linear-gradient(to right, #6B7280, #6B7280)' }}>
      <div className="flex items-center">
        <img
          className='mb-0 transform -rotate-90 ml-6' // Adjust rotation and margin based on your preference
          src={logoImage}
          alt='Logo'
          style={{ width: '30px', height: 'auto' }} /> {/* Adjust the logo image source and height */}
        <Typography className="py-5 px-2 text-center">
          <Link to={`/home`}>
            <div>
              <span className="font-bold text-white">Silver Stride AI</span>
            </div>
          </Link>
        </Typography>
      </div>
      <div className="profileRtCover flex justify-center h-15 mb-2 mt-5">
        {/* do relative position later if needed */}
        <img src="download.jpeg" alt="IMG" className="rounded-full h-14" /> {/* Adjust the profile image source and height */}
      </div>
      <Typography className="py-2 px-2 text-center mb-10">
        <div>
          <span className="font-bold text-white">{ userName.username }</span>
        </div>
      </Typography>
      <List>
        <div className="px-2 flex content-center flex-col self-center">
          <Link to="/dashboard">
            <ListItem className="gap-3 mb-2 items-center cursor-pointer w-full">
              <ListItemPrefix>
                <ChartBarSquareIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span>DashBoard</span>
            </ListItem>
          </Link>
          <Link to="/userfin">
            <ListItem className="gap-3 mb-2 items-center cursor-pointer">
              <ListItemPrefix>
                <ArrowTrendingUpIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span>Learn</span>
            </ListItem>
          </Link>
          <Link to="/assets">
            <ListItem className="gap-3 mb-2 items-center cursor-pointer">
              <ListItemPrefix>
                <InboxStackIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span>Invest</span>
            </ListItem>
          </Link>
          <Link to="/">
            <ListItem className="gap-3 mb-2 items-center cursor-pointer">
              <ListItemPrefix>
                <InboxStackIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span>Logout</span>
            </ListItem>
          </Link>
        </div>
      </List>
    </Card>
  );
}