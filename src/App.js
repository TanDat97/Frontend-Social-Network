import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import Profile from './components/profile';
import Newfeed from './components/newfeed';
import People from './components/people';



class App extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className = "App">
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Profile} />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
