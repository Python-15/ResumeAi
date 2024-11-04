import React, { useEffect } from 'react';
import './dashboard.css';
import Addresmue from './component/Addresmue';
import { useUser } from '@clerk/clerk-react';
import apiServices from '../../../apiServices/apiServices'

function DahsBoard() {
  // now we will get resumeDetails of user based on userEmail,
  const user = useUser();
  const userEmail = user.user.primaryEmailAddress.emailAddress;
  const GetresumeDetails=async()=>{
    const data =await apiServices.getResumeDetails(userEmail)
    console.log(data);
  }
  useEffect(() => {
    GetresumeDetails();
  }, [user])
  return (
    <div className="DashBoard_container">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start your journey with AI resume maker</p>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10"
      >
        <Addresmue />
      </div>
    </div>
  );
}

export default DahsBoard;
