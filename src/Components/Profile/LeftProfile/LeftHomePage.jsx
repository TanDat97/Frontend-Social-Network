import React, { Component } from 'react';

import {Col, Row} from "react-bootstrap"
//Connect redux
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as globalVariable from "../../../Global/Variable/GlobalVariable"
import Avatar from "react-avatar"
const LeftHomePage = ({userProfile})=> {

    console.log(userProfile);
  
   
      
   
    //const userProfile = props.userProfile
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
                                            <NavLink to = {"/payment/" + userProfile.publicKey} className="btn btn-default"><i className="fa fa-money pull-right" aria-hidden="true"></i>Payment</NavLink>
                                            <a href="" className="btn btn-default"><i className="fa fa-sign-out pull-right"></i>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
   
                    <div className="panel rounded shadow bg-white">
                            <div className="panel-heading">
                                <div >
                                    <h3 className="ml-3">Contact</h3>
                                </div>
                              
                                <div className="clearfix"></div>
                            </div>
                            <div className="panel-body no-padding rounded">
                                <ul className="list-group">
                                    <li className="list-group-item text-truncate" ><i className="fa fa-envelope mr-2"></i>{userProfile.email}</li>
                                    <li className="list-group-item text-truncate "><i className="fa fa-globe mr-2"></i>www.bootdey.com</li>
                                    
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                     
                </Col>
    );
  }



export default LeftHomePage;
