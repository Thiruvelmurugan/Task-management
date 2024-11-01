import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginForm.css';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    username: '',
    email: '',
    password: '',
    agree: false,
    remember: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (isLogin) {
      if (username === 'admin' && password === 'admin') {
        console.log('Login Successful');
        setError('');
        // Handle successful login (e.g., redirect)
      } else {
        setError('Invalid username or password.');
      }
    } else {
      console.log('Registration not implemented.');
      setError('');
    }
  };

  const action = () => {
    setIsLogin(!isLogin);
    setError(''); 
  };

  return (
    <div className='login'>
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
          <h1>{isLogin ? 'Login' : 'Register'}</h1>
          {error && <p className='error-message'>{error}</p>}
          <div className='input-box'>
            <input 
              type='text' 
              name='username' 
              placeholder='Username' 
              required 
              value={loginData.username}
              onChange={handleChange} 
            />
            <FaUser className='icon' />
          </div>
          {!isLogin && (
            <div className='input-box'>
              <input 
                type='email' 
                name='email' 
                placeholder='Email' 
                required 
                value={loginData.email}
                onChange={handleChange} 
              />
              <FaEnvelope className='icon' />
            </div>
          )}
          <div className='input-box'>
            <input 
              type='password' 
              name='password' 
              placeholder='Password' 
              required 
              value={loginData.password}
              onChange={handleChange} 
            />
            <FaLock className='icon' />
          </div>
          <div className='remember-forgot'>
            {isLogin ? (
              <>
                <label>
                  <input 
                    type='checkbox' 
                    name='remember' 
                    checked={loginData.remember}
                    onChange={handleChange} 
                  /> Remember me
                </label>
                <a href='#'>Forgot password?</a>
              </>
            ) : (
              <label>
                <input 
                  type='checkbox' 
                  name='agree' 
                  checked={loginData.agree}
                  onChange={handleChange} 
                /> I agree to the terms & conditions
              </label>
            )}
          </div>
          <button type='submit'>{isLogin ? 'Login' : 'Register'}</button>
          <div className='register-link'>
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <a href='#' onClick={action}>{isLogin ? 'Register' : 'Login'}</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;


