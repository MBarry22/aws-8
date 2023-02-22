import React from 'react'
import { useState } from 'react'

import Routers from '../routers/Router'

export default function Page() {
    //const [errorMessage, setErrorMessage] = useState(null)

    //routing logic
    //const[page, setPage] = useState("login")

    


   // let currentForm = null

    // routing logic change to react router later
       /*switch(page){
            case "signup":
                currentForm = <SignupForm onSubmit={handleSignUp}/>
                break
            case "confirm":
                currentForm = <ConfirmEmail  onSubmit={handleConfirmEmail}/>
                break
            case "login":
                currentForm = <LoginForm onSubmit={handleLogin}/>
                break
            case "success":
                currentForm = <HomePage/>
        }
        */
        
    
    return(
        <div className="flex justifty-center items-center h-screen flex-col">
           <Routers />
        </div>
    )
}