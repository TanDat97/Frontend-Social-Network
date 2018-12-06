import React, { Component } from 'react';
import Post from '../Newsfeed/Post'
import Profile from "../Layout/NavBar/LeftBar/Profile"
import {Col, Row,Tab,Tabs} from "react-bootstrap"
import LeftHomePage from './LeftProfile/LeftHomePage'
import TopHomePage from './TopProfile/TopHomePage'
import AboutProfile from "./About/AboutProfile"
//Connect redux
import { connect } from 'react-redux';

class HomePage extends Component {
    
  render() {
    var auth = this.props.auth   
    return (
        <div>
            
            <div >
            <Row>
                <LeftHomePage/>
                <Col lg = {9} md = {9} sm = {8}>
                <TopHomePage/>
                
               
                <br/>
             
                <nav>
          
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">About</a>
                    <a className ="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                
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
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                
                <AboutProfile/>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>
                 
                    
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

