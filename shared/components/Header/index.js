import React from 'react';
import Logo from './Logo/index';
import Menu from './Menu/index';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <Logo />
      <h1>React, Universally</h1>
      <strong>A starter kit for universal react applications.</strong>
      <Menu />
    </div>
  );
}

export default Header;
