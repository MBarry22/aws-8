import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import AuthPage from './Auth/Page'
import LoginForm from './Auth/LoginForm'
import ConfirmEmail from './Auth/ConfirmEmail'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPage />
  </React.StrictMode>,
)
