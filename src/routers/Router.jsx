import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginForm from '../Auth/LoginForm';
import ConfirmEmail from '../Auth/ConfirmEmail';
import SignupForm from '../Auth/SignupForm';

import { NavLink } from 'react-router-dom';




function Routers ()  {
    return(

        <Router>
            <ul class="navlinks">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">SignUp</NavLink></li>
                <li><NavLink to="/confirmemail">ConfirmEmail</NavLink></li>
               
            </ul>
            <Switch>
                <Route exact path='/'><HomePage></HomePage></Route>
                <Route path='/login'><LoginForm></LoginForm></Route>
                <Route path='/signup'><SignupForm></SignupForm></Route>
                <Route path='/confirmemail'><ConfirmEmail></ConfirmEmail></Route>


            </Switch>
        </Router>
    )
};
export default Routers;



