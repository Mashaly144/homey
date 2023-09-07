import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='flex gap-x-8 text-3xl'>
      <a href='https://www.facebook.com/Abdallah.Mashaly.456/' target='blank'>
        <BsFacebook className='transition hover:text-hover text-primary w-[30px] h-[30px]  cursor-pointer' />
      </a>

      <a href='https://www.instagram.com/mashalyabdallah/' target='blank'>
        <BsInstagram className='transition hover:text-hover text-primary w-[30px] h-[30px]   cursor-pointer' />
      </a>
      <a
        href='https://www.youtube.com/channel/UCeVSDHjRKk-rsnQlXcSksAg'
        target='blank'
      >
        <BsYoutube className='transition hover:text-hover text-primary w-[30px] h-[30px]   cursor-pointer' />
      </a>
      <a
        href='https://www.linkedin.com/in/abdallah-mashaly-797482250/'
        target='blank'
      >
        <BsLinkedin className='transition hover:text-hover text-primary  w-[30px] h-[30px]  cursor-pointer' />
      </a>
    </div>
  );
};

export default SocialMedia;
