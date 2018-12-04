
import React, { Component } from 'react';
import {Col, Row, FormGroup, FormControl, Button, Media} from "react-bootstrap";

import Profile from "../Layout/NavBar/LeftBar/Profile";
import People from "../Layout/NavBar/RightBar/Followings";
import Post from "./Post";

//Connect redux
import { connect } from 'react-redux';

//Plugin
import InfiniteScrool from "react-infinite-scroller"


const avatarUser = {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
}

class Newfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
        }        
    }
    
  render() {
    return (
        <Row>
            <Col xs= {6} md = {3}>
                <Profile getFollower = {this.props.follower} />
            </Col>
            <Col xs={6} md={6}>
                <div className ="card bg-light">
                    <div className = "card-body">
                        <h5 className ="card-title text-secondary">Tạo bài viết</h5>
                        <div className = "card-text">
                            <Media>
                                <Media.Left>
                                    <a className="mr-3" href="/profile">
                                        <img alt=""  style ={avatarUser} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"/>
                                    </a>
                                </Media.Left>
                                <Media.Body>
                                    <FormGroup controlId="formControlsTextarea">
                                        <FormControl componentClass="textarea" placeholder = "What's up?..."/>
                                    </FormGroup>
                                    <Button type="submit" className ="float-right">Post</Button>
                                    <ul className="nav">
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i class="fa fa-user"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i class="fa fa-map-marker"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i class="fa fa-camera"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i class="fa fa-smile-o"></i></a>
                                        </li>
                                    </ul>
                                </Media.Body>
                            </Media>
                        </div>
                    </div>  
                </div>
                <br/>
                {this.props.post.map ( each => {
                    return (
                        <div> 
                            <Post getPost = {each}/>
                            <br/>
                        </div>
                    )
                })}

                
            </Col>
            <Col xs={6} md={3}>
                <People/>
            </Col>
        </Row>
    );
  }
}



const  mapStateToProps = (state) => {
    console.log(state.post)
    return {
        post: state.post,
        follower: state.follower
    };
}


export default connect(
    mapStateToProps,
)(Newfeed);
