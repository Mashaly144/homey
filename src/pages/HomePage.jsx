import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Performance from '../components/Performance';
import Services from '../components/Services';
import Subscription from '../components/Subscription';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
      <About />
      <Performance />
      <Services />
      <Subscription />
    </div>
  );
};

export default HomePage;
