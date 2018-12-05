import React, { Component } from 'react';
import Post from '../Newsfeed/Post'
import Profile from "../Layout/NavBar/LeftBar/Profile"
import {Col, Row} from "react-bootstrap"
import LeftHomePage from './LeftProfile/LeftHomePage'
import TopHomePage from './TopProfile/TopHomePage'
//Connect redux
import { connect } from 'react-redux';

class HomePage extends Component {
    
  render() {
    var auth = this.props.auth
    return (
        <div>
            <div class="container bootstrap snippets">
            <Row>
                <LeftHomePage/>
                <Col lg = {9} md = {9} sm = {8}>
                <TopHomePage/>
                <div class="divider"></div>
                <br/>
                    <Row>
                    <Col xs={6} md={8}>
                        {this.props.post.map ( each => {
                            return (
                                <div> 
                                    <Post getPost = {each}/>
                                    <br/>
                                </div>
                            )
                            })}
                    </Col>
                    <Col xs= {6} md = {4}>
                        <Profile Follower = {this.props.follower} Following = {this.props.following}/>
                    </Col>
                     </Row>
                    
                 </Col>
            </Row>
            </div>
        </div>
    );
  }
}



const  mapStateToProps = (state) => {
    console.log(state.post)
    return {
        post: state.post,
        follower: state.follower,
        auth: state.auth,
        following: state.following,
        
    };
}


export default connect(
    mapStateToProps,
)(HomePage);

