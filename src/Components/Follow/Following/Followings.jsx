import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import { connect } from 'react-redux';

import Profile from '../../Layout/NavBar/LeftBar/Profile';
import FollowingCard from './FollowingCard';

class Following extends Component {
  render() {
    return (
        <Row>
            <Col xs={6} md={3}>
                <Profile Follower = {this.props.follower} Following = {this.props.following}/>
            </Col>
            <Col xs={6} md={9}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <h5>
                                    <big>FOLLOWING</big>
                                    <br/>
                                    <a href="/12/following">{this.props.following.Following_List.length}</a>
                                </h5>
                            </div>
                            <div className="col-4">
                                <h5>
                                    <small>FOLLOWER</small>
                                    <br/>   
                                    <a href="/12/follower">{this.props.follower.Follower_List.length}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="card-group">
                    <Row>
                        {this.props.following.Following_List.map ( each => {
                        return (
                            <Col xs = {6} md = {4}> 
                                <FollowingCard Card = {each}/>
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
    return {
        following: state.following,
        follower: state.follower,
    };
}

export default connect(
    mapStateToProps,
)(Following);

