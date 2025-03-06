'use client';
import { User } from 'lucide-react';
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, password }), 
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        console.log('User:', data.user);
        setUsername('');
        setPassword('');
        setError('');

        
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-tr from-yellow-600 to-black">
      <div className="flex shrink items-center justify-center rounded-xl w-200 shadow-2xl h-110 backdrop-blur-xl">
        <form
          method="POST"
          action="#"
          className="flex flex-col p-4 items-center justify-center bg-gray-50 rounded-s-xl h-110 w-100"
          onSubmit={handleLogin}
        >
          <div className="items-center justify-center space-y-6 w-70 h-100 p-4 rounded-2xl text-gray-800 bg-white">
            <div className="flex items-center justify-center mt-6">
              <User
                color="white"
                strokeWidth={1}
                size={100}
                className="bg-black rounded-full p-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                required
                className="p-2 rounded-lg text-sm text-center border w-full border-gray-800"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
                className="p-2 rounded-lg text-sm text-center border w-full border-gray-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="bg-amber-300 px-15 py-1 text-gray-800 rounded-lg hover:bg-amber-400 hover:cursor-pointer hover:text-white"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1.5 items-center justify-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="bg-gray-200 hover:cursor-pointer"
                />
                <label htmlFor="remember-me" className="text-xs">
                  Remember Me
                </label>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-xs hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            </div>
          </div>
        </form>

        <div className="flex-col items-center justify-center text-gray-800 rounded-e-xl h-110 w-full">
          <img
            src="/img/gads_logo_transparent.png"
            alt="Golden Arrow Digital Solutions Logo"
            className="h-110 w-full rounded-e-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;