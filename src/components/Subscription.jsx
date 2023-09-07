import React from 'react';
import MainButton from '../ui/MainButton';
import { GrSend } from 'react-icons/gr';
import { BsSendFill } from 'react-icons/bs';

const Subscription = () => {
  return (
    <div className='py-[50px]'>
      <div className='container mx-auto'>
        <div>
          <div className='main-header'>
            <h1
              className='text-5xl font-semibold leading-tight'
              data-aos='fade-left'
            >
              أطلب
              <span className='text-primary'> خدمتك </span>الأن
            </h1>
            <p data-aos='fade-right'>
              بسهولة يمكنك إرسال طلبك وسيتم الرد في اقرب وقت
            </p>
          </div>
          <form className='sub-form' action='' data-aos='fade-up'>
            <input
              className='sub-input'
              type='email'
              name='email'
              id='email'
              placeholder='أدخل بريدك الالكتروني'
            />
            <MainButton className='bg-primary'>
              إرسال <BsSendFill className='inline-flex text-2xl ' />
            </MainButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
