import React, { useState } from 'react';
import Button from '../atoms/Button'
import './Form.css';
import Input from '../atoms/Input'
const Form = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClick = () => {
      alert("All the Details are entered");
    }
  return <div className="form">
      <Input type="text" placeholder="First Name" 
        onChange={(event) => { 
          setFirstName(event.target.value) 
          console.log(event.target.value)
        }}
      />
      <Input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
      <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <Button label="Check" onClick={handleClick} disabled={!firstName || !lastName || !email || !password} />
  </div>;
};

export default Form;
