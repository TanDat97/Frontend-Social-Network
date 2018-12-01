import React, { Component } from 'react';

import {BrowserRouter ,Route, Switch} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import Profile from './components/profile';
import Newfeed from './components/newfeed';
import People from './components/people';



class App extends Component {
  render() {
    return (
<<<<<<< HEAD
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className = "App">
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Profile} />
          </Switch>
=======
      <div>
        <Header/>
        <div class="container">
          <div class="row">
            <Profile/>
            
            <Newfeed/>
           
            <People/> 
          </div>
>>>>>>> 9fe8e61fba33bf1d3a0e6691b67962974853f5ff
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
