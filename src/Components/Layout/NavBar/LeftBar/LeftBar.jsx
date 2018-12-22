import React from 'react';
import {Col, Row } from "react-bootstrap"

import { connect } from 'react-redux';
import {NavLink} from "react-router-dom"

const LeftBar = ({userProfile}) => {
    const followings = userProfile.followings;
    
    return (
        <div>
            <div className ="card" >
                <a href="/"><img className="card-img-top" alt="" src="https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2018/12/03/cp.jpg"/></a>
                <div className = "card-body">
                    <Row>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followings </small></Row>
                                <Row><NavLink to={"/following/" + userProfile.publicKey}>{followings.length}</NavLink></Row>
                            </h5>
                        </Col>
                    </Row>
                </div>  
            </div>
            <br/>
        </div>
    )

}

export default LeftBar
