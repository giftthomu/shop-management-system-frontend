import React, { useState } from 'react';
import './Login.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="flex items-center justify-between p-1 w-[1100px] mx-auto ">
      <h1 className="text-3xl font-bold">Shop</h1>
      <ul className="navbar-links">
      <button type="button" className="text-gray-900 border border-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
      Log In
    </button>
      </ul>
    </div>
  </nav>
  
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <Navbar/>
      <div className="mx-auto mt-10 p-3 w-[400px] border border-gray-300 rounded-[0.40rem]">
        <h2 className="text-3xl font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
            Log In
          </button>
          <h1>forgot password?</h1>
        </form>
      </div>
    </div>
  );
};

export default Login;