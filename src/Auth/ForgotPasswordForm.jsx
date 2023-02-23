import React, { useState } from 'react';
import { forgotPassword } from '../cognito';

function ForgotPasswordForm() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await forgotPassword({ username });
      setMessage('A confirmation code has been sent to your email address.');
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {message && <p className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded" role="alert">{message}</p>}
          <button type="submit" className ="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send reset code</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
