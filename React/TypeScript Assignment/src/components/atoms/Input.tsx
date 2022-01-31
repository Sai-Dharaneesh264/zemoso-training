import React from 'react';

interface Props {
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({type, placeholder, onChange}: Props) => {
  return <div>
      <input type={type} placeholder={placeholder} onChange={onChange}/>
  </div>;
};

export default Input;
