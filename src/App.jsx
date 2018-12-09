import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom';

import HeaderBar from "./Components/Layout/NavBar/HeaderBar/HeaderBar";
import Newfeed from './Components/Newsfeed/Newsfeed';
import HomePage from './Components/Profile/Profile'
import Following from './Components/Follow/Following/Followings';
import Follower from './Components/Follow/Follower/Follwers';
import Signin from './Components/Profile/Auth/Signin'
import Signup from './Components/Profile/Auth/Signup'

class App extends Component {
  render() {
    return (
        
          
         
          <BrowserRouter >
              <div className = "container">
              <HeaderBar/>
              <br/>
              <Switch>
              <Route exact path="/" component={Newfeed}/>
              <Route exact path = "/profile" component ={HomePage}/>
              <Route exact path = "/signin" component = {Signin}/>
              <Route path = "/signup" component = {Signup}/>
              <Route exact path="/:id/following" component={Following}/>
              <Route exact path="/:id/follower" component={Follower}/>
              </Switch>
              </div>
          </BrowserRouter>
      
    );
  }
}

export default App;


