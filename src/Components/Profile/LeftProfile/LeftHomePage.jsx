import React, { Component } from 'react';

import {Col, Row} from "react-bootstrap"
//Connect redux
import { connect } from 'react-redux';

class LeftHomePage extends Component {
    
  render() {
    var auth = this.props.auth
    return (
        <Col lg = {3} md = {3} sm = {4}>
                    <div className="panel rounded shadow bg-white">
                        <div className="panel-body">
                            <div className="inner-all">
                                <ul className="list-unstyled">
                                    <li className="text-center">
                                        <img data-no-retina="" className="img-circle img-responsive img-bordered-primary" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="John Doe"/>
                                    </li>
                                    <li className="text-center">
                                        <h4 className="text-capitalize">{auth.firstName + " " + auth.lastName}</h4>
                                        <p className="text-muted text-capitalize"> <i className="fa fa-phone"></i> {auth.phone}</p>
                                    </li>
                                   
                                    <li><br/></li>
                                    <li>
                                        <div className="btn-group-vertical btn-block">
                                            <a href="" className="btn btn-default"><i className="fa fa-cog pull-right"></i>Edit Account</a>
                                            <a href="" className="btn btn-default"><i className="fa fa-sign-out pull-right"></i>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-theme rounded shadow">
                        <div className="panel-heading">
                            <div className="pull-left">
                                <h3 className="panel-title">Contact</h3>
                            </div>
                            <div className="pull-right">
                                <a href="#" className="btn btn-sm btn-success"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="btn btn-sm btn-success"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="btn btn-sm btn-success"><i className="fa fa-google-plus"></i></a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="panel-body no-padding rounded">
                            <ul className="list-group no-margin">
                                <li className="list-group-item text-truncate" ><i className="fa fa-envelope mr-5"></i> {auth.email}</li>
                                <li className="list-group-item"><i className="fa fa-globe mr-5"></i> www.bootdey.com</li>
                                
                            </ul>
                        </div>
                    </div>

                </Col>
    );
  }
}



const  mapStateToProps = (state) => {
    console.log(state.post)
    return {
        
        auth: state.auth,
    
        
    };
}


export default connect(
    mapStateToProps,
)(LeftHomePage);

