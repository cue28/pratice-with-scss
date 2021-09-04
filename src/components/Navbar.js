import React from 'react';
import '../scss/Navbar.scss';

function Navbar() {
  return (
    <div className='nav__container'>
      <nav className='navbar'>
        <div className='navbar__logo'>
          <h1>♦️ WEBSITE NAME</h1>
        </div>

        <ul className='navbar__buttons'>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
