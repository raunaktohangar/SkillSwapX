import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
      // Handle successful registration (e.g., redirect to login)
      alert('Registration successful');
    } else {
      // Handle registration error (e.g., show a message)
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-100">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">Create an account to get free access for 3 days. No credit card required.</p>
        
        <form onSubmit={handleSignUp}>
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
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="border border-gray-300 w-full p-2 rounded"
              placeholder="@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Register
          </button>
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="/Login" className="text-blue-500 underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;