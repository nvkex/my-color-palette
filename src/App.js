import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SinglePalette from './components/SinglePalette';
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div>
      <Navbar history={props.history} />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/palette/:id" component={SinglePalette} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
