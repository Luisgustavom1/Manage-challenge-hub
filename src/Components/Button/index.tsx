import React, { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, color = "primary", ...rest }: IButton) {
  return (
    <button
      type="button"
      className={`container-button button-${color}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
