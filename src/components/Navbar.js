import React from 'react';
import './Navbar.scss';

function Navbar(){
  return (
    <nav>
      {/* navbar */}
      <div className='container'>
        <div className='logo'>
          <h1>♦️ WEBSITE NAME</h1>
        </div>
        <div className='buttons'>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Blog</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;