import React from 'react'
import Login from './Login/indjex';
import Register from './Register';
import register from '../../assets/images/backgrounds/register.svg';
import Switch from './Swtich';

function User() {
    const [activeButton, setActiveButton] = React.useState('login');
  return (
    <div className='relative w-full h-screen flex items-center justify-center bg-black'>
        <img src={register} alt='background' className='absolute w-full h-full bottom-0' />
        <Switch  
            activeButton={activeButton}
            setActiveButton={setActiveButton}
        />
        {
            activeButton === 'login' ? (
                <Login />
            ) : (
                <Register />
            )
        }
    </div>
  )
}

export default User