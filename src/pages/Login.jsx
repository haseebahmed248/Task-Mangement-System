import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../utils/Context/UserContext';

function LoginIn() {
    const { setUser } = useContext(UserContext);  
    const [error , setError] = React.useState(null);
    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    });
    axios.defaults.withCredentials = true;
    const handelSubmit = async (e) => {
        
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/users/login', formData);
            console.log('User logged in:', response.data);
            setUser(response.data.data);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid credentials');
        }
    }
    
  return (
    
    <div className='bg-gray-900 w-full h-screen flex justify-center items-center'>
      <div className='bg-gray-800 w-3/4 h-5/6 flex flex-col  items-center rounded-[40px] shadow-md shadow-gray-700'>
        <h1 className='text-white text-5xl font-bold mt-10'>Login</h1>
        <form className='flex flex-col w-4/5 space-y-10 items-center justify-center mt-16' onSubmit={handelSubmit}>
          <input
            type='text'
            placeholder='Username'
            className='border-2 p-5 w-3/6 bg-transparent rounded-3xl'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='border-2 p-5 w-3/6 bg-transparent rounded-3xl'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <p className='
            text-blue-500 text-sm font-bold hover:text-blue-700 cursor-pointer transition-all duration-300 ease-in-out
          '
          onClick={() => window.location.href = '/'}
          >Click here to Register</p>
          {error && <p className='text-red-500'>{error}</p>}
          <input
            type='submit'
            value={"Login"}
            className='bg-blue-500 text-white p-5 w-2/6 rounded-3xl shadow-md shadow-gray-600 hover:bg-gray-800 transition-all
            duration-300 ease-in-out hover:border-blue-600 border hover:text-gray-200 text-xl'
            
          />
          </form>
      </div>
    </div>
  );
}

export default LoginIn;
