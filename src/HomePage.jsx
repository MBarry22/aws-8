import { useState, useEffect } from 'react'
import * as cognito from './cognito'

function HomePage() {
const [user, setUser] = useState(null)

useEffect(() => {
  const user = cognito.getCurrentUser()
  setUser(user)
  }, [])

  async function SignOut() {
    const token = await cognito.signOut()
    console.log(token)
  }

  

  return (
    <div className="App">
      
      <h1>Aligator App</h1>
      <h2>{user && <p>Hello There{user.username}</p>}</h2>
      <button onClick={SignOut}>Sign Out</button>
      
      
      
    </div>
  )
}

export default HomePage
