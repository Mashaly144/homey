import React from 'react';
import logo from '../assets/logo.svg';
const Logo = () => {
  return (
    <div className='flex gap-2 items-center'>
      <img src={logo} alt='logo' />
      <h1 className='text-xl font-semibold'>
        Homey <br /> <span className='text-primary text-xl'>للعقارات</span>
      </h1>
    </div>
  );
};

export default Logo;
