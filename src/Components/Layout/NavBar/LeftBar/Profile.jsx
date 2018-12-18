import React from 'react';
import {Col, Row } from "react-bootstrap"
import FollowerBar from "./FollowerBar"
import { connect } from 'react-redux';


const Profile = (props) => {
    const follower = props.follower;
    const following = props.following;
    console.log(follower);
    
    return (
        <div>
            <div className ="card" >
                <a href="/"><img className="card-img-top" alt="" src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2018/12/03/cp.jpg"/></a>
                <div className = "card-body">
                    <Row>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followers </small></Row>
                                <Row><a href="/thayTenODay/follower">{follower.length}</a></Row>
                            </h5>
                        </Col>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followings </small></Row>
                                <Row><a href="/thayTenODay/following">{following.length}</a></Row>
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

export default Profile
