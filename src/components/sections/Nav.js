import React from 'react'
import logo from '../../centered-no-text.png';

    /* on scroll darken the menu */

const Nav = () => {
  return (
    <nav>
    <div className='Logo-Nav'>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className='Menu'>
        <a src={""}>About</a>
        <a src={""}>Playstyles</a>
        <a src={""}>Gallery</a>
        <a src={""}>Updates</a>
    </div>
    <div className='HamburgerMenu'>
      <img src={require('../../assets/herosection/amburgerMeni.png')} />
    </div>
  </nav>
  )
}

export default Nav