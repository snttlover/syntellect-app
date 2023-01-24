import React, { FC, ReactNode } from 'react';

import './Button.css';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
