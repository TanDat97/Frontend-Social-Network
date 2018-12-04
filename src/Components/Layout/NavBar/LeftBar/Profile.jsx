import React from 'react';
import {Col, Row } from "react-bootstrap"
import FollowerBar from "./FollowerBar"

const Profile = (props) => {
    const Follower = props.Follower;
    const Following = props.Following;
    
    console.log(Follower.Follower_List)
    return (
        <div>
            <div className ="card" >
                <a href="/"><img className="card-img-top" alt="" src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2018/12/03/cp.jpg"/></a>
                <div className = "card-body">
                    <Row>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followers </small></Row>
                                <Row><a href="/thayTenODay/follower">{Follower.Follower_List.length}</a></Row>
                            </h5>
                        </Col>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followings </small></Row>
                                <Row><a href="/thayTenODay/following">{Following.Following_List.length}</a></Row>
                            </h5>
                        </Col>
                    </Row>
                </div>  
            </div>
            <br/>
            <FollowerBar Follower = {Follower}/>
        </div>
    )
}

export default Profile
