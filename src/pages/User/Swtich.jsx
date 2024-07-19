import React, { useState } from 'react';

function Switch(props) {
  return (
    <div className='absolute flex w-auto h-auto lg:w-1/6 lg:h-fit top-20 right-40 bg-gray-500 rounded-[14px]'>
      <button
        className={`flex-1 p-2 rounded-[14px] ${props.activeButton === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black'}`}
        onClick={() => props.setActiveButton('login')}
      >
        Login
      </button>
      <button
        className={`flex-1 p-2 rounded-[14px] ${props.activeButton === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black'}`}
        onClick={() => props.setActiveButton('register')}
      >
        Register
      </button>
    </div>
  );
}

export default Switch;
