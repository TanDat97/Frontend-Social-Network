import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./Components/Layout/NavBar/HeaderBar/HeaderBar"
import Newfeed from './Components/Newsfeed/Newsfeed';




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
