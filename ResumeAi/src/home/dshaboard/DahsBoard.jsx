import React from 'react';
import './dashboard.css';
import Addresmue from './component/Addresmue';

function DahsBoard() {
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
