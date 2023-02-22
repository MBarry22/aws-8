import { useState } from "react";

export default function ForgotPassword({onSubmit}) {
    const[username, setUsername] = useState("");
    const[code, setCode] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({username, code})
    }



    return(
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-2/6">
            <div clasName="mb-4">
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
                
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Confirm Code
                    </button>
                </div>

            </div>

        </form>
    )
}