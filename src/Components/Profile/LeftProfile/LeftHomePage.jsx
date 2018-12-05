import React, { Component } from 'react';

import {Col, Row} from "react-bootstrap"
//Connect redux
import { connect } from 'react-redux';

class LeftHomePage extends Component {
    
  render() {
    var auth = this.props.auth
    return (
        <Col lg = {3} md = {3} sm = {4}>
                    <div class="panel rounded shadow bg-white">
                        <div class="panel-body">
                            <div class="inner-all">
                                <ul class="list-unstyled">
                                    <li class="text-center">
                                        <img data-no-retina="" class="img-circle img-responsive img-bordered-primary" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="John Doe"/>
                                    </li>
                                    <li class="text-center">
                                        <h4 class="text-capitalize">{auth.firstName + " " + auth.lastName}</h4>
                                        <p class="text-muted text-capitalize"> <i class="fa fa-phone"></i> {auth.phone}</p>
                                    </li>
                                   
                                    <li><br/></li>
                                    <li>
                                        <div class="btn-group-vertical btn-block">
                                            <a href="" class="btn btn-default"><i class="fa fa-cog pull-right"></i>Edit Account</a>
                                            <a href="" class="btn btn-default"><i class="fa fa-sign-out pull-right"></i>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-theme rounded shadow">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h3 class="panel-title">Contact</h3>
                            </div>
                            <div class="pull-right">
                                <a href="#" class="btn btn-sm btn-success"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="btn btn-sm btn-success"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="btn btn-sm btn-success"><i class="fa fa-google-plus"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body no-padding rounded">
                            <ul class="list-group no-margin">
                                <li className="list-group-item text-truncate" ><i class="fa fa-envelope mr-5"></i> {auth.email}</li>
                                <li class="list-group-item"><i class="fa fa-globe mr-5"></i> www.bootdey.com</li>
                                
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

