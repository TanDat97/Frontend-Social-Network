
import React, { Component } from 'react';

import Profile from "../Layout/NavBar/LeftBar/Profile"
import People from "../Layout/NavBar/RightBar/People"
import Post from "./Post"
import {Col, Row, FormGroup, ControlLabel, FormControl, Button, Media} from "react-bootstrap"


const avatarUser = {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
}


class Newfeed extends Component {
  render() {
    return (
            <Row>
            <Col xs= {6} md = {3}>
            <Profile/>
            </Col>
            <Col xs={6} md={6}>
  
            <div className ="card bg-light">
                <div className = "card-body">
                    <h5 className ="card-title text-secondary">Tạo bài viết</h5>
                    <div className = "card-text">
                    <Media>
                    <Media.Left>
                        <a className="mr-3" href="#fake">
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
                                <a className = "nav-link" href="#"><i class="fa fa-user"></i></a>
                            </li>
                            
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i class="fa fa-map-marker"></i></a>
                            </li>
                            
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i class="fa fa-camera"></i></a>
                            </li>
                            
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i class="fa fa-smile-o"></i></a>
                            </li>
                        </ul>
                    </Media.Body>
                </Media>
                    </div>
                </div>  
            </div>

        <br/>
        
            <Post/>
            <br/>
            <Post/>                
            <br/>
            <Post/>
            
        <br/>

        </Col>
        
        <Col xs={6} md={3}>
        <People/>
        </Col>
        </Row>
        
    );
  }
}

export default Newfeed;

