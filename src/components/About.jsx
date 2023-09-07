import React from 'react';
import about from '../assets/about.png';
import MainButton from '../ui/MainButton';
import { MdKeyboardDoubleArrowLeft, MdRoundaboutLeft } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
const About = () => {
  return (
    <div className='py-[50px]'>
      <div className='container mx-auto'>
        <div className='flex-between flex-col lg:flex-row space-y-10 lg:space-y-0'>
          <div className='flex items-start flex-col gap-7 flex-1'>
            <h1
              className='text-5xl font-semibold leading-tight'
              data-aos='fade-left'
            >
              من
              <span className='text-primary'> نحن ؟</span>
            </h1>
            <p>لدينا فريق متخصص في مجال خدمات وتسويق العقارات</p>
            <ul className='space-y-10'>
              <ol data-aos='fade-left'>
                <FcAbout className='inline-flex ml-2 animate-bounce text-2xl' />
                شركة Homey لخدمات التسويق العقاري أحدى الشركات الرائدة في أعمال
                العقارات.
              </ol>

              <ol data-aos='fade-left'>
                <FcAbout className='inline-flex ml-2 animate-bounce text-2xl' />
                نسعى لتحقيق تجربة مميزة وفعالة لكل من المشترين والبائعين على حد
                سواء.
              </ol>
              <ol data-aos='fade-left'>
                <FcAbout className='inline-flex ml-2 animate-bounce text-2xl' />
                يتميز موقعنا بالابتكار والاحترافية لنلبي احتياجات عملائنا في سوق
                العقارات المتزايد التنافسية.
              </ol>
            </ul>
            <div data-aos='fade-left'>
              <MainButton>
                شاهد المزيد{' '}
                <MdKeyboardDoubleArrowLeft className='inline-flex animate-ping duration-75' />
              </MainButton>
            </div>
          </div>
          <div className='flex-1'>
            <img
              className='max-w-full'
              src={about}
              alt='about'
              data-aos='fade-right'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
