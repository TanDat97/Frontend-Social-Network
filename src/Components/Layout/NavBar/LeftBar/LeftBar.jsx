import React from 'react';
import {Col, Row } from "react-bootstrap"
import FollowerBar from "./FollowerBar"
import { connect } from 'react-redux';
import {NavLink} from "react-router-dom"

const LeftBar = ({userProfile}) => {
    console.log(userProfile);
    const follower = userProfile.follower;
    const following = userProfile.following;
    

    console.log(userProfile);
    
    return (
        <div>
            <div className ="card" >
                <a href="/"><img className="card-img-top" alt="" src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2018/12/03/cp.jpg"/></a>
                <div className = "card-body">
                    <Row>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followers </small></Row>
                                <Row><NavLink to={"/follower/" + userProfile.publicKey}>{follower.length}</NavLink></Row>
                            </h5>
                        </Col>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followings </small></Row>
                                <Row><NavLink to={"/following/" + userProfile.publicKey}>{following.length}</NavLink></Row>
                            </h5>
                        </Col>
                    </Row>
                </div>  
            </div>
            <br/>
            <FollowerBar follower = {follower}/>
        </div>
    )

}

export default LeftBar
