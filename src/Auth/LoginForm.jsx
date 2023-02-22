import { useState } from "react";

export default function SignupForm({onSubmit}) {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", {username, password});
    onSubmit({username, password});

    }



    return(
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-2/6 p-6">
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
    </div>

    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
        </button>
    </div>
</form>
    )
}