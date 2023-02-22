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
    <form onSubmit={handleConfirm} className="bg-white shadow-md rounded w-2/6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
          Confirmation Code
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Confirmation Code"
        />
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Confirm Email
        </button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
