import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom';

import HeaderBar from "./Components/Layout/NavBar/HeaderBar/HeaderBar";
import Newsfeed from './Components/Newsfeed/Newsfeed';
import HomePage from './Components/Profile/Profile'
import Following from './Components/Follow/Following/Followings';
import Follower from './Components/Follow/Follower/Follwers';
import Signin from './Components/Auth/Signin'
import Signup from './Components/Auth/Signup'

import RedirectPage from "./Components/Layout/Redirect/RedirectPage"
import Payment from "./Components/Payment/Payment"
class App extends Component {
  render() {
    return (
          <BrowserRouter >
              <div>
                <HeaderBar/>
                <br/>
                <div className = "container">
                  <Switch>
                  <Route exact path="/" component={Newsfeed}/>
                  <Route exact path = "/profile/:publicKey" component ={HomePage}/>
                  <Route exact path = "/signin" component = {Signin}/>

                  <Route path = "/payment" component = {Payment}/>
                  <Route exact path = "/redirect" component = {RedirectPage}/>
                  <Route path = "/signup" component = {Signup}/>
                  <Route exact path="/following/:publicKey" component={Following}/>
                  <Route exact path="/follower/:publicKey" component={Follower}/>
                  </Switch>
                </div>
              </div>
          </BrowserRouter>
    );
  }
}

export default App;


