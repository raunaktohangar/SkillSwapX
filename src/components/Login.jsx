import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      navigate('/SkillCards');
    } else {
      // Handle login error (e.g., show a message)
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-100">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
        <p className="text-gray-600 text-center mb-6">Log In to Start </p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="border border-gray-300 w-full p-2 rounded"
              placeholder="projectuser"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="border border-gray-300 w-full p-2 rounded"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 rounded">
            Log In
          </button>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <a href="/SignUp" className="text-blue-500 underline">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;