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
            <div class="col-sm-3">
              <Profile/>
            </div>
            <div class="col-sm-6">
              <Newfeed/>
            </div>
            <div class="col-sm-3">
             <People/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
