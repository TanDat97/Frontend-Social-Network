import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./components/Layout/NavBar/HeaderBar/HeaderBar"
import Profile from './components/Layout/LeftBar/profile';
import Newfeed from './components/Newsfeed/newfeed';
import People from './components/Layout/RightBar/people';
import {BrowserRouter ,Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <div>
              <Switch>
              <Route exact path="/" component={Newfeed}/>
              </Switch>
              </div>
          </BrowserRouter>
        </div>
        
    );
  }
}

export default App;
