import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./Components/Layout/NavBar/HeaderBar/HeaderBar"
import Newfeed from './Components/Newsfeed/Newsfeed';
import PersonalPage from './Components/Profile/PersonalPage'
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
              <Route exact path = "/HomePage" component ={PersonalPage}/>
              <Route exact path="/Setting" component ={SettingProfile}/>
              </Switch>
              </div>
          </BrowserRouter>
        </div>
        
    );
  }
}

export default App;
