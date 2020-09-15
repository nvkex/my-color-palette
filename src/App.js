import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SignUp from './components/Forms/Signup';
import Login from './components/Forms/Login';
import SinglePalette from './components/SinglePalette';
import Navbar from './components/Navbar';
import Dashboard from './components/User/Dashboard';
import Logout from './components/User/Logout';
import { useDispatch } from 'react-redux';
import { loginUser } from './actions/AuthActions';
import axios from 'axios';

function App(props) {

  const URL = "https://my-color-palette.herokuapp.com";

  var token = localStorage.getItem('token');
  var user = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();

  if (token && user) {

    // Check token expiry
    axios.get(`${URL}/auth/check-token-expiry?token=${token}`)
      .then(res => {
        if (res.data.expired) {
          token = null;
          user = null;
          return <Redirect to="/logout" />
        }
      })
      .catch(err => {
        console.log(err);
      })
    
    dispatch(loginUser(200, user, token));
  }

  return (
    <div>
      <Navbar history={props.history} />
      <div>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/palette/:id" component={SinglePalette} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
