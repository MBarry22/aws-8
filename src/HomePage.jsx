import { useState, useEffect } from 'react'
import * as cognito from './cognito'

function HomePage() {
const [user, setUser] = useState(null)

useEffect(() => {
  const user = cognito.getCurrentUser()
  setUser(user)
  }, [])

  async function doSomething() {
    const token = await cognito.getAccessToken()
    console.log(token)
  }

  return (
    <div className="App">
      
      <h1>Aligator App</h1>
      <button onClick={doSomething}>Do Something</button>
      
      
    </div>
  )
}

export default HomePage
