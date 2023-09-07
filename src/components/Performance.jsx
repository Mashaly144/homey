import React from 'react';
import speed from '../assets/speed.png';
import price from '../assets/price.png';
import experience from '../assets/experiance.png';
import quality from '../assets/quality.png';

const Performance = () => {
  return (
    <div className='py-[50px]'>
      <div className='container mx-auto'>
        <div>
          {/* header */}
          <div className='main-header'>
            <h1
              className='text-5xl font-semibold leading-tight'
              data-aos='fade-left'
            >
              ما
              <span className='text-primary'> يميزنا </span>
            </h1>
            <p data-aos='fade-right'>
              لدينا فريق متخصص في مجال خدمات وتسويق العقارات
            </p>
          </div>
          {/* cards */}
          <div className='cards'>
            <div className='card' data-aos='fade-left'>
              <img src={experience} alt='experience' />
              <div>
                <h1>الخبرة</h1>
                <p>
                  {' '}
                  فريق متخصص يتمتع بخبرة عالية في مجال خدمات وتسويق العقارات
                </p>
              </div>
            </div>
            <div className='card' data-aos='fade-left'>
              <img src={speed} alt='experience' />
              <div>
                <h1>السرعه</h1>
                <p>تنفيذ وإيجاد طلبك في أسرع وقت </p>
              </div>
            </div>
            <div className='card' data-aos='fade-right'>
              <img src={price} alt='experience' />
              <div>
                <h1>السعر</h1>
                <p>نقدم لعملائنا أسعار تنافسية بتكلفة أقل وكفاءة عالية</p>
              </div>
            </div>
            <div className='card' data-aos='fade-right'>
              <img src={quality} alt='experience' />
              <div>
                <h1>الجودة</h1>
                <p>
                  {' '}
                  فريق متخصص يتمتع بخبرة عالية في مجال خدمات وتسويق العقارات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
