import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import { connect } from 'react-redux';

import Profile from '../../Layout/NavBar/LeftBar/Profile';
import FollowCard from './FollowingCard';

class Following extends Component {
  render() {
    return (
        <Row>
            <Col xs={6} md={3}>
                <Profile/>
            </Col>
            <Col xs={6} md={9}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <h5>
                                    <big>FOLLOWING</big>
                                    <br/>
                                    <a href="/12/following">{this.props.Following_List.length}</a>
                                </h5>
                            </div>
                            <div className="col-4">
                                <h5>
                                    <small>FOLLOWER</small>
                                    <br/>   
                                    <a href="/">{this.props.Follower_List.length}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="card-group">
                    <Row>
                        {this.props.Following_List.map ( each => {
                        return (
                            <Col xs = {6} md = {4}> 
                                <FollowCard Card = {each}/>
                            </Col>
                            )
                        })}
                    </Row>
                </div>
            </Col>
        </Row>
    );
  }
}

const  mapStateToProps = (state) => {
    console.log(state);
    return {
        Following_List: state.following.Following_List,
        Follower_List: state.follower.Follower_List,
    };
}


export default connect(
    mapStateToProps,
)(Following);

