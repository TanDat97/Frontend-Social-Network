import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header';
import Profile from './components/profile';
import Newfeed from './components/newfeed';
import People from './components/people';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
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
