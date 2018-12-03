import React, { Component } from 'react';

import Profile from '../NavBar/LeftBar/Profile';
import FollowCard from './FollowCard';
import '../../../style/style.css';

const card = {
    marginRight:"10px",
    marginBottom:"10px",
    width: '260px',    
    backgroundColor: "#d4ecf6",
}

class Following extends Component {
  render() {
    return (
        <div>
            <Profile/>
            <div className="col-sm-8">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-2">
                                <h5>
                                    <small>FOLLOWING</small>
                                    <br/>
                                    <a href="#">1,545</a>
                                </h5>
                            </div>
                            <div className="col-xs-2">
                                <h5>
                                    <small>FOLLOWER</small>
                                    <br/>   
                                    <a href="#">251</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-group">
                    <div class = "col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                    <div class = "col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                    <div class = "col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                    <div class = "col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                    <div class = "col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                    <div class = "  col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                    <div class = "col-sm-4" style = {card}>
                        <FollowCard/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Following;

