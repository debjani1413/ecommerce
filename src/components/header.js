import React from 'react';

const Header = ({text,link}) => {
  return (
    <div className='display-header'> 
      <p className='header'>{text}</p>
      <a href={link}>See All</a>
    </div>
  )
}

export default Header;
