import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./components/Layout/NavBar/Navbar"
import Profile from './components/profile';
import Newfeed from './components/newfeed';
import People from './components/people';



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
