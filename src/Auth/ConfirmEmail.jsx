import { useState } from "react";
import * as cognito from "../cognito";

export default function ConfirmEmail() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleConfirm = async (event) => {
    event.preventDefault();
    try {
      await cognito.confirmUser({ username, code });
      // Redirect to success page
      console.log("Email confirmed successfully!");
    } catch (error) {
      console.log("Error confirming email", error);
      setErrorMessage("Error confirming email");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Confirm Email</h2>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleConfirm} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="code">
              Confirmation Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Confirmation code"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
