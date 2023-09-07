import React from 'react';
import { support, contacts } from '../constant/data';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
const Footer = () => {
  return (
    <footer className='pt-0 lg:pt-24' data-aos='fade-up' data-aos-offset='50'>
      <div className='container mx-auto lg:mb-24'>
        <div className='flex flex-col gap-12 lg:flex-row items-center mt-4'>
          {/* linls groub */}
          <div className='flex flex-1 flex-col justify-between gap-16 lg:flex-row'>
            {/* logo */}
            <div className='flex flex-1 flex-col  items-center text-center  lg:text-right space-y-4'>
              <Logo />
              <p className='w-2/3'>
                متخصصون في مجال إدارة وتسويق العقارات ومساعدتك في إيجاد العقار
                المناسب
              </p>
              <SocialMedia />
            </div>

            {/* Contacts */}
            <div className=' flex-1 text-center lg:text-right'>
              <h1 className='mb-6 text-2xl font-medium'>وسائل التواصل</h1>
              <ul className='space-y-4 text-xl  text-gray'>
                {contacts.map((item, index) => {
                  return (
                    <div key={index}>
                      <lis
                        className='transition-all duration-300 hover:text-hover cursor-pointer'
                        key={index}
                      >
                        <a href={item.href}>{item.email}</a>
                      </lis>
                      <li
                        className='transition-all duration-300 hover:text-hover cursor-pointer'
                        key={index}
                      >
                        <a href={item.href}>{item.number}</a>
                      </li>
                      <li className='transition-all duration-300 hover:text-hover cursor-pointer'>
                        <a href={item.href}>{item.address}</a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* Support */}
            <div className=' flex-1 text-center lg:text-right'>
              <h1 className='mb-6 text-2xl font-medium'>روابط مختصرة</h1>
              <ul className=' space-y-4 text-xl  text-gray'>
                {support.map((item, index) => {
                  return (
                    <li
                      className='transition-all duration-300 hover:text-hover'
                      key={index}
                    >
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* foot and social media */}
      <div className='container mx-auto flex flex-col items-center py-5 border-t-2 border-blue-500  mt-3 lg:flex-row lg:justify-between'>
        <h1 className='mb-5 text-xl'>جميع الحقوق محفوظة©Homey2023</h1>
        <div className='flex gap-4'>
          <a href='#'>شروط الاستخدام</a>
          <a href='#'>سياسة الخصوصية</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
