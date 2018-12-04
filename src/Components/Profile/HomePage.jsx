import React, { Component } from 'react';
import Post from '../Newsfeed/Post'
import Profile from "../Layout/NavBar/LeftBar/Profile"
import {Col, Row} from "react-bootstrap"
//Connect redux
import { connect } from 'react-redux';

class HomePage extends Component {
    
  render() {
    var auth = this.props.auth
    return (
        <div>
            <div class="container bootstrap snippets">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4">
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

                </div>


                <div class="col-lg-9 col-md-9 col-sm-8">

                <div class="profile-cover">
                    <div class="cover rounded shadow no-overflow">
                        <div class="inner-cover">
                        
                            <div class="btn-group cover-menu-mobile hidden-lg hidden-md">
                                <button type="button" class="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <ul class="dropdown-menu pull-right no-border" role="menu">
                                    <li class="active"><a href="/profile"><i class="fa fa-fw fa-clock-o"></i> <span>Timeline</span></a></li>
                                    <li><a href="/profile/setting"><i class="fa fa-fw fa-user"></i> <span>About</span></a></li>
                                    <li><a href="#"><i class="fa fa-fw fa-photo"></i> <span>Photos</span> <small>(98)</small></a></li>
                                    <li><a href="#"><i class="fa fa-fw fa-users"></i><span> Friends </span><small>(23)</small></a></li>
                                    <li><a href="#"><i class="fa fa-fw fa-envelope"></i> <span>Messages</span> <small>(7 new)</small></a></li>
                                </ul>
                            </div>
                            <img  src="http://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg" class="img-responsive full-width" alt="cover" style={{width: 1000, height: 200}}/>
                        </div>
                        <ul class="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
                            <li class="active"><a href="/profile"><i class="fa fa-fw fa-clock-o"></i> <span>Timeline</span></a></li>
                            <li><a href="/profile/setting"><i class="fa fa-fw fa-user"></i> <span>About</span></a></li>
                            <li><a href="#"><i class="fa fa-fw fa-photo"></i> <span>Photos</span> <small>(98)</small></a></li>
                            <li><a href="#"><i class="fa fa-fw fa-users"></i><span> Friends </span><small>(23)</small></a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="divider"></div>
                <br/>
                    <Row>
                    <Col xs={6} md={8}>
                        {this.props.post.map ( each => {
                            return (
                                <div> 
                                    <Post getPost = {each}/>
                                    <br/>
                                </div>
                            )
                            })}
                    </Col>
                    <Col xs= {6} md = {4}>
                    <Profile getFollower = {this.props.follower} />
                    </Col>
                    </Row>
                    
                </div>
                </div>
            </div>
        </div>
    );
  }
}



const  mapStateToProps = (state) => {
    console.log(state.post)
    return {
        post: state.post,
        follower: state.follower,
        auth: state.auth,
    };
}


export default connect(
    mapStateToProps,
)(HomePage);

