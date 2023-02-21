import { useState, useEffect } from 'react'
import * as cognito from './cognito'

function HomePage() {
const [user, setUser] = useState(null)

useEffect(() => {
  const user = cognito.getCurrentUser()
  setUser(user)
  }, [])


  const handleSignOut = async (username) => {
    try{
         cognito.signOut(username)
        
    }catch(error){
        console.log("Error confirming sign up", error)
        setErrorMessage("Error confirming sign up")
    }
}
 

  console.log(user)

  return (
    <div className="justify-center text-center">
      
      <h1>Profile:</h1>
      <h2>{user && <p>Hello There{user.username}</p>}</h2>
      <button onClick={handleSignOut}>Sign Out</button>
      
    </div>
  )
}

export default HomePage
