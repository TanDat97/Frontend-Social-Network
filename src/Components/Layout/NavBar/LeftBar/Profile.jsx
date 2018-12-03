import React, { Component } from 'react';
import {Col, Row } from "react-bootstrap"



const Profile = () => { 
    return (
        <div>
            
            <div className ="card" >

                <a href="#"><img className="card-img-top" alt="" src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2018/12/03/cp.jpg"/></a>
            
                <div className = "card-body">
                    <Row>
                        <Col xs={6} md={6}>
                            <h5>
                            <small>Followers </small>
                            <a href="#">251</a>
                            </h5>
                        </Col>
                        <Col xs={6} md={6}>
                            <h5>
                            <small>Followings </small>
                            <a href="#">153</a>
                            </h5>
                        </Col>
                    </Row>
                </div>  
            </div>

            <br/>

            <div className ="card">
                <div className = "card-body">
                    <h3 className ="card-title text-secondary">Followers</h3>
                    <div className = "card-text">
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
            </div>
            </div>
    )
}

export default Profile;
