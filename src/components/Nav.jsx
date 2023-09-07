import React from 'react';

const Nav = () => {
  return (
    <nav className='hidden  lg:flex'>
      <ul className='flex-between gap-4'>
        <li className='cursor-pointer text-xl font-medium hover:text-hover p-2 nav-link'>
          الرئيسيه
        </li>
        <li className='cursor-pointer text-xl font-medium hover:text-hover p-2 nav-link'>
          من نحن
        </li>
        <li className='cursor-pointer text-xl font-medium hover:text-hover p-2 nav-link'>
          مايميزنا
        </li>
        <li className='cursor-pointer text-xl font-medium hover:text-hover p-2 nav-link'>
          خداماتنا
        </li>
        <li className='cursor-pointer text-xl font-medium hover:text-hover p-2 nav-link'>
          شركاء النجاح
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
