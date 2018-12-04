import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom';

import HeaderBar from "./Components/Layout/NavBar/HeaderBar/HeaderBar";
import Newfeed from './Components/Newsfeed/Newsfeed';
import HomePage from './Components/Profile/HomePage'
import SettingProfile from './Components/Profile/SettingProfile'
import Following from './Components/Follow/Following/Followings';
import Follower from './Components/Follow/Follower/Follwers';


class App extends Component {
  render() {
    return (
        <div>
          <HeaderBar/>
          <br/>
          <BrowserRouter >
              <div className = "container">
              <Switch>
                <Route exact path="/" component={Newfeed}/>
                <Route exact path = "/profile" component ={HomePage}/>
                <Route exact path="/profile/setting" component ={SettingProfile}/>
                <Route exact path="/" component={Newfeed}/>
                <Route exact path="/:id/following" component={Following}/>
                <Route exact path="/:id/follower" component={Follower}/>
              </Switch>
              </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
