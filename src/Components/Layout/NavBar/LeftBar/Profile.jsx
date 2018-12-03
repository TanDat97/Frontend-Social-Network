import React, { Component } from 'react';
import {Col, Row } from "react-bootstrap"


const Profile = () => { 
    return (
        <Col xs={6} md={3}>
            <div class="panel panel-default">
                <div class="panel-body">
                    <a href="#"><img class="img-responsive" alt="" src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2018/12/03/cp.jpg"/></a>
                    <Row>
                        <Col xs={6} md={6}>
                        <h5>
                            <small>FOLLOWING: </small>
                            <a href="#">251</a>
                            </h5>
                        </Col>
                        <Col xs={6} md={6}>
                        <h5>
                            <small>FOLLOWERS: </small>
                            <a href="#">153</a>
                            </h5>
                        </Col>
                    </Row>
                </div>
            </div>

            <div class="panel panel-default panel-custom">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        <a href = "#" >Followers</a>
                    </h3>
                </div>

                <div class="panel-body">
                    <ul class="list-unstyled">
                        <li><a href="#">#Cras justo odio</a></li>
                        <li><a href="#">#Dapibus ac facilisis in</a></li>
                        <li><a href="#">#Morbi leo risus</a></li>
                        <li><a href="#">#Porta ac consectetur ac</a></li>
                        <li><a href="#">#Vestibulum at eros</a></li>
                        <li><a href="#">#Vestibulum at eros</a></li>
                        <li><a href="#">#Vestibulum at eros</a></li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}

export default Profile;
