import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signIn } from '../cognito';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await signIn({ username, password });
      console.log('Logged in successfully', result);
      setLoggedIn(true);
    } catch (error) {
      console.log('Error logging in:', error);
      setError('Incorrect username or password');
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto shadow rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-4xl font-bold mb-6 text-purple-900">Login</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-purple-900  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
