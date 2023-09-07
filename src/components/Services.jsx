import React from 'react';
import { BsFillBuildingsFill, BsFillHouseCheckFill } from 'react-icons/bs';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import { BiBuildingHouse } from 'react-icons/bi';

const Services = () => {
  return (
    <div className='py-[50px]'>
      <div className='container mx-auto'>
        <div>
          <div className='main-header'>
            <h1
              className='text-5xl font-semibold leading-tight'
              data-aos='fade-left'
            >
              <span className='text-primary'> خداماتنا </span>
            </h1>
            <p data-aos='fade-right'>خدمات موقع عقارات Homey</p>
          </div>
          <div className='services-cards' data-aos='fade-up'>
            <div className='services-card' data-aos='fade-left'>
              <div className='services-icon'>
                <BsFillHouseCheckFill />
              </div>
              <h1>منازل</h1>
            </div>
            <div className='services-card' data-aos='fade-left'>
              <div className='services-icon'>
                <BsFillBuildingsFill />
              </div>
              <h1>شقق</h1>
            </div>
            <div className='services-card' data-aos='fade-right'>
              <div className='services-icon'>
                <MdOutlineHolidayVillage />
              </div>
              <h1>إيجار يومي</h1>
            </div>
            <div className='services-card' data-aos='fade-right'>
              <div className='services-icon'>
                <BiBuildingHouse />
              </div>
              <h1>مباني جديدة</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
