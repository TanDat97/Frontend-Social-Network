import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";

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
                            <div className="col-2">
                                <h5>
                                    <small>FOLLOWING</small>
                                    <br/>
                                    <a href="/">1,545</a>
                                </h5>
                            </div>
                            <div className="col-2">
                                <h5>
                                    <small>FOLLOWER</small>
                                    <br/>   
                                    <a href="/">251</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="card-group">
                    <Row>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                        <Col xs = {6} md = {4}>
                            <FollowCard/>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
  }
}

export default Following;

