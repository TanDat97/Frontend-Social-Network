
import React, { Component } from 'react';

import Profile from "../Layout/NavBar/LeftBar/Profile"
import People from "../Layout/NavBar/RightBar/People"
import Post from "./Post"
import {Col, Row, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"


const avatarUser = {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
}

class Newfeed extends Component {
  render() {
    return (
        <div className = "container">
            
            <Row>
            <Profile/>
            <Col xs={6} md={6}>

            <div className="panel panel-info">
                <div className="panel-heading">
                    <div className="media">
                        <a className="media-left" href="#fake">
                            <img alt=""  style ={avatarUser} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"/>
                        </a>
                        <div className="media-body">
                            <div className="form-group has-feedback">
                                {/* <label className="control-label sr-only" for="inputSuccess5">Hidden label</label>
                                <input type="text" className="form-control" id="search2" aria-describedby="search"/>
                                <span id="search2" className="sr-only">(success)</span> */}
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Tạo bài viết</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder = "What's up?..."/>
                                </FormGroup>
                                <Button type="submit" className ="pull-right">Post</Button>
                                <ul class="nav nav-pills">
                                    <li><a href="#"><i class="fa fa-user"></i></a></li>
                                    <li><a href="#"><i class="fa fa-map-marker"></i></a></li>
                                    <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                    <li><a href="#"><i class="fa fa-smile-o"></i></a></li>
                                </ul>
                                
    
                            </div>
                        </div>
                    </div>
                </div>
                
                <Post/>
                

            </div>

        </Col>
        <People/>
        </Row>
        
        </div>
    );
  }
}

export default Newfeed;

