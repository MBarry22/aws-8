import { useState } from "react";
import * as cognito from "../cognito";
export default function ConfirmEmail() {
    const[username, setUsername] = useState("");
    const[code, setCode] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleConfirmEmail = async (username, code) => {
        try{
            await cognito.confirmUser(username, code)
        }catch(error){
            console.log("Error confirming sign up", error)
            setErrorMessage("Error confirming sign up")
        }
    }



    return(
        <form onSubmit={handleConfirmEmail} className="bg-white shadow-md rounded w-2/6">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Code
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="username"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Code"
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