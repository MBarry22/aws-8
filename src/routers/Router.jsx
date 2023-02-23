import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginForm from '../Auth/LoginForm';
import ConfirmEmail from '../Auth/ConfirmEmail';
import SignupForm from '../Auth/SignupForm';
import ForgotPasswordForm from '../Auth/ForgotPasswordForm';
import ResetPasswordForm from '../Auth/ResetPassword';
import { NavLink } from 'react-router-dom';

function Routers ()  {
  return (
    <Router>
      <nav className="flex items-center justify-between flex-wrap bg-purple-800 p-6 w-full">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">MP</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-100 mr-4" style={{ marginLeft: "10px" }}>
              Home
            </NavLink>
            <NavLink to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-100 mr-4" style={{ marginLeft: "10px" }}>
              Login
            </NavLink>
            <NavLink to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-100 mr-4" style={{ marginLeft: "10px" }}>
              Signup
            </NavLink>
            <NavLink to="/confirmemail" className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-100" style={{ marginLeft: "10px" }}>
              ConfirmEmail
            </NavLink>
            <NavLink to="/forgotpassword" className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-100" style={{ marginLeft: "10px" }}>
              Forgot Password
            </NavLink>
            <NavLink to="/resetpassword" className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-100" style={{ marginLeft: "10px" }}>
              Reset Password
            </NavLink>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'><HomePage></HomePage></Route>
        <Route path='/login'><LoginForm></LoginForm></Route>
        <Route path='/signup'><SignupForm></SignupForm></Route>
        <Route path='/confirmemail'><ConfirmEmail></ConfirmEmail></Route>
        <Route path='/forgotpassword'><ForgotPasswordForm></ForgotPasswordForm></Route>
        <Route path='/resetpassword'><ResetPasswordForm></ResetPasswordForm></Route>
      </Switch>
    </Router>
  );
};

export default Routers;
