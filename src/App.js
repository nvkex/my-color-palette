import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SignUp from './components/Forms/Signup';
import Login from './components/Forms/Login';
import SinglePalette from './components/SinglePalette';
import Navbar from './components/Navbar';
import Dashboard from './components/User/Dashboard';
import Logout from './components/User/Logout';
import { useDispatch } from 'react-redux';
import { loginUser } from './actions/AuthActions';

function App(props) {

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();

  if(token && user){
    dispatch(loginUser(200, user, token));
  }

  return (
    <div>
      <Navbar history={props.history} />
      <div>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}/>
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
