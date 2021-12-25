import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...rest }: IButton) {
  return (
    <button 
      className='container-button'
      {...rest}
      >
      {children}
    </button>  
  );
}

export default Button;