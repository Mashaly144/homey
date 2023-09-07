import React from 'react';
import hero from '../assets/hero.png';
import MainButton from '../ui/MainButton';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
const Hero = () => {
  return (
    <div className='py-[50px]'>
      <div className='container mx-auto'>
        <div className='flex-between flex-col lg:flex-row space-y-10 lg:space-y-0'>
          <div className='flex items-start flex-col gap-6 flex-1'>
            <h1
              className='text-5xl font-semibold leading-tight'
              data-aos='fade-left'
              data-aos-offset='300'
            >
              {' '}
              شركة <span className='text-primary'>Homey</span> لخدمات التسويق
              العقاري
            </h1>
            <p className='leading-relaxed' data-aos='fade-left'>
              شركة Homey هي شركة تسويق عقاري متخصصة تعمل على توصيل المشترين
              والبائعين في سوق العقارات بأمان وسهولة. تأسست الشركة على يد فريق
              من المحترفين ذوي الخبرة في مجال التسويق وتكنولوجيا المعلومات، وهم
              ملتزمون بتقديم أفضل الخدمات لعملائهم.
            </p>
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
              src={hero}
              alt='hero'
              data-aos='fade-right'
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
