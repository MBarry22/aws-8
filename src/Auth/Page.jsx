import React from 'react'
import { useState } from 'react'
import SignupForm from './SignupForm'
import * as coginto from '../cognito'
import ConfirmEmail from './ConfirmEmail'
import LoginForm from './LoginForm'
import HomePage from '../HomePage'

export default function Page() {
    const [errorMessage, setErrorMessage] = useState(null)

    //routing logic
    const[page, setPage] = useState("login")

    const handleSignUp = async (username, email, password, confirmPassword) => {
    
    if(password !== confirmPassword) {
        setErrorMessage("Passwords do not match")
        return
    }
    try{
      await  coginto.signUp(username, email, password, confirmPassword)
      setPage("confirm")
    }catch(error){
        console.log("Error signing up", error)
        setErrorMessage("Error signing up")

    }}
    const handleConfirmEmail = async (username, code) => {
        try{
            await coginto.confirmUser(username, code)
            setPage("login")
        }catch(error){
            console.log("Error confirming sign up", error)
            setErrorMessage("Error confirming sign up")
        }
    }
    const handleLogin = async (username, password) => {
        try{
            await coginto.signIn(username, password)
            setPage("success")
            // redirect to app
        }catch(error){
            console.log("Error logging in", error)
            setErrorMessage("Error logging in")
        }
    }


    let currentForm = null

    // routing logic change to react router later
        switch(page){
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
        
    
    return(
        <div className="flex justifty-center items-center h-screen flex-col">
            <h1>Auth Page</h1>
            {currentForm}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    )
}