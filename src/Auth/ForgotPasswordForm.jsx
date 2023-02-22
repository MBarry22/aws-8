import React, { useState } from 'react';
import { forgotPassword } from '../cognito';

export default function ForgotPasswordForm() {
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
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send reset code
      </button>
    </form>
  );
}
