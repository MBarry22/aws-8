import { useState, useEffect } from 'react'
import * as cognito from './cognito'

function HomePage() {
const [user, setUser] = useState(null)
const [page, setPage] = useState("")


useEffect(() => {
  const user = cognito.getCurrentUser()
  setUser(user)
  }, [])

   function handleSignOut() {
    const token = cognito.signOut()
    setPage("login")
    console.log(token)
    
  }


  return (
    <div className="items-center text-center">
      <h1>Welcome To The Home Page</h1>
      {user && <h2>Welcome {user.username}</h2>}
      <button onClick={handleSignOut}>Sign Out!</button>
      
      
    </div>
  )
}

export default HomePage
