import React from 'react';
import MainButton from './MainButton';
import Nav from '../components/Nav';
import Logo from './Logo';
import { BiPhoneCall } from 'react-icons/bi';

const Header = () => {
  return (
    <header className='py-9 container mx-auto' data-aos='fade-down'>
      <div className='flex-between'>
        <Logo />
        <Nav />
        <MainButton>
          تواصل معنا{' '}
          <BiPhoneCall className='inline-flex animate-pulse text-2xl' />{' '}
        </MainButton>
      </div>
    </header>
  );
};

export default Header;
