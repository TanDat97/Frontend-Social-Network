import React, { Component } from 'react';

import {Col, Row} from "react-bootstrap"
//Connect redux
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as globalVariable from "../../../Global/Variable/GlobalVariable"
import Avatar from "react-avatar"
const LeftHomePage = ({userProfile, authKey})=> {
    console.log(userProfile);
    console.log(authKey);
    
    return (
        <Col lg = {3} md = {3} sm = {4}>
                    <div className="panel rounded shadow bg-white">
                    
                        <div className="panel-body">
                            <div className="inner-all">
                            <div className = "card">
                            <a href="/"><img className="card-img" alt="" src={userProfile.avatar? userProfile.avatar: globalVariable.default_avatar}/></a>

                            <div className = "card-body">
                                <ul className="list-unstyled">
                                    <li className="text-center">
                                        <h4 className="text-capitalize">{userProfile.displayName}</h4>
                                     
                                        <p className="text-muted text-capitalize"> <i className="fa fa-phone"></i> {userProfile.phoneNumber}</p>
                                        <p className="text-muted text-capitalize"> Tài khoản: {userProfile.amount?userProfile.amount:0} TRE</p>
                                    </li>
                                   
                                    <li><br/></li>
                                    <li>
                                        <div className="btn-group-vertical btn-block">
                                            {userProfile.publicKey === authKey.publicKey? null : <NavLink to = {"/payment/" + userProfile.publicKey} className="btn btn-default"><i className="fa fa-money pull-right" aria-hidden="true"></i>Payment</NavLink>}
                                            <NavLink to = {"/signup/"} className="btn btn-default"><i className="fa fa-user pull-right" aria-hidden="true"></i>Create Account</NavLink>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
    );
  }



export default LeftHomePage;
