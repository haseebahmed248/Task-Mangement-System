import React from 'react';
import { Button, Input } from '../../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const naivgate = useNavigate();
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/register', {
        userName,
        email,
        password
      });
      console.log(response);
      naivgate('/login');
    }
    catch (e) {
      setError("Invalid!!!!");
      console.log(e);
    }
  }

  return (
    <>
      <div
        className='w-auto h-auto flex flex-col items-center justify-center mx-auto mt-20 p-20'
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.37)',
        }}
      >
        <h1 className='text-blue-500 font-bold text-6xl mb-10'>
        Register
        </h1>
        <Input
                name="UserName"
                placeholder={'Enter Username'}
                type={"text"}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                />
        <Input
                name="Search Input"
                placeholder={'Enter Email'}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
        <Input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className='text-red-500 mt-4'>{error}</p>
        <Button
          className='mt-5 max-w-full border bg-gray-900 text-blue-300 h-2/6 p-2 shadow-md rounded-[14px] hover:text-white hover:bg-transparent transition-all duration-300 hover:border-blue-300  '
          onClick={handleSubmit}
        >
          Register
        </Button>
      </div>
      </>
  );
}

export default Register;
