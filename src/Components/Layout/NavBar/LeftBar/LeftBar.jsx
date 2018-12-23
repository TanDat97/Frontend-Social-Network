import React from 'react';
import {Col, Row } from "react-bootstrap"
import {NavLink} from "react-router-dom"

import * as globalVariable from "../../../../Global/Variable/GlobalVariable"

const LeftBar = ({userProfile}) => {
    const followings = userProfile.followings.addresses;
    console.log(userProfile);
    
    return (
        <div>
            <div className ="card" >
                <a href="/"><img className="card-img-top" alt="" src={globalVariable.default_cover_picture}/></a>
                <div className = "card-body">
                    <Row>
                        <Col xs={6} md={6}>
                            <h5>
                                <Row><small>Followings </small></Row>
                                <Row><NavLink to={"/following/" + userProfile.publicKey}>{followings.length?followings.length:"0"}</NavLink></Row>
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
