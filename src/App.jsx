import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom';

import HeaderBar from "./Components/Layout/NavBar/HeaderBar/HeaderBar";
import Newfeed from './Components/Newsfeed/Newsfeed';
import HomePage from './Components/Profile/Profile'
import Following from './Components/Follow/Following/Followings';
import Follower from './Components/Follow/Follower/Follwers';
import Signin from './Components/Profile/Auth/Signin'
import Signup from './Components/Profile/Auth/Signup'

import RedirectPage from "./Components/Layout/Redirect/RedirectPage"
class App extends Component {
  render() {
    return (
        
          
         
          <BrowserRouter >
              <div>
                <HeaderBar/>
                <br/>
                <div className = "container">
                  <Switch>
                  <Route exact path="/" component={Newfeed}/>
                  <Route  path = "/profile" component ={HomePage}/>
                  <Route exact path = "/signin" component = {Signin}/>

                  <Route exact path = "/redirect" component = {RedirectPage}/>

                  <Route path = "/signup" component = {Signup}/>
                  <Route exact path="/:id/following" component={Following}/>
                  <Route exact path="/:id/follower" component={Follower}/>
                  </Switch>
                </div>
              </div>
          </BrowserRouter>
      
    );
  }
}

export default App;


