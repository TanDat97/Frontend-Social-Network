import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./Components/Layout/NavBar/HeaderBar/HeaderBar"
import Newfeed from './Components/Newsfeed/Newsfeed';
import HomePage from './Components/Profile/HomePage'
import SettingProfile from './Components/Profile/SettingProfile'



class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <div>
              <Switch>
              <Route exact path="/" component={Newfeed}/>
              <Route exact path = "/HomePage" component ={HomePage}/>
              <Route exact path="/Setting" component ={SettingProfile}/>
              </Switch>
              </div>
          </BrowserRouter>
        </div>
        
    );
  }
}

export default App;
