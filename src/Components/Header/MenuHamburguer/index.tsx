import React from 'react';

import './styles.scss';
interface IMenuHamburguer {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const MenuHamburguer = ({ setIsOpen, isOpen}: IMenuHamburguer) => {
  return (
    <section
      onClick={() => setIsOpen(!isOpen)}
      className={`container-menu-responsive ${isOpen ? 'open' : ''}`}
    >
      <svg className="menu-hamburguer" xmlns="http://www.w3.org/2000/svg" width="25" height="18">
        <g fill="#242D52" fillRule="evenodd">
          <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
        </g>
      </svg>
      <svg className="close-menu-hamburguer" xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z" /></svg>
    </section>
  );
}

export default MenuHamburguer;