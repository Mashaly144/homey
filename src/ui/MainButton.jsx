import React from 'react';

const MainButton = ({ children }) => {
  return (
    <button className='bg-primary hover:bg-hover transition-colors rounded-[10px] text-white px-5 py-3 w-fit'>
      {children}
    </button>
  );
};

export default MainButton;
