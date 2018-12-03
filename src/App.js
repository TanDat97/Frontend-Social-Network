import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./components/Layout/NavBar/Navbar"
import Profile from './components/Layout/LeftBar/profile';
import Newfeed from './components/Newsfeed/newfeed';
import People from './components/Layout/RightBar/people';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="container">
          <div class="row">
            <Profile/>
            
            <Newfeed/>
           
            <People/> 
          </div>
        </div>
        </div>
        
    );
  }
}

export default App;
