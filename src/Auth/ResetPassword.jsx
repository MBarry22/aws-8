import React, { useState } from 'react';
import { resetPassword } from '../cognito';

function ResetPasswordForm() {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ username, code, newPassword });
      setErrorMessage('');
      setSuccessMessage('Password reset successfully!');
    } catch (err) {
      setSuccessMessage('');
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-6 text-purple-600">Reset Password</h1>
        {errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">{errorMessage}</div>}
        {successMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded" role="alert">{successMessage}</div>}
        <form onSubmit={handleResetPassword} className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="code" className="block text-gray-700 font-bold mb-2">Code</label>
            <input
              type="text"
              id="code"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 font-bold mb-2">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
export default ResetPasswordForm;
