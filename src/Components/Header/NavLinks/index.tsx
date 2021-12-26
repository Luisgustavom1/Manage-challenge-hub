import React from 'react';

import './styles.scss';
interface INavLinks {
  isOpen: boolean
}

const NavLinks = ({ isOpen }: INavLinks) => {
  return (
    <nav className={`container-nav ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        <li>Pricing</li>
        <li>Product</li>
        <li>About us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
    </nav>
  );
}

export default NavLinks;