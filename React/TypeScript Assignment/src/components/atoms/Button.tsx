import React from 'react';
import './Button.css'

interface Props {
    disabled: boolean;
    label: string;
    onClick: () => void;
}

const Button = ({disabled, label, onClick}: Props) => {
  return <div className="button">
      <button disabled={disabled} onClick={onClick}>{label}</button>
  </div>;
};

export default Button;
