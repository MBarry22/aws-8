import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import Page from './Auth/Page'
import LoginForm from './Auth/LoginForm'
import ConfirmEmail from './Auth/ConfirmEmail'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
    <Page/>
    </Router>

)
