import React, { Component } from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import {updateAuthProfile} from "../../Store/Actions/authActions"

class SettingPage extends Component {
  render() {

    var auth = this.props.auth
    console.log(auth);
    
    return (
        <div>
            <div className="container bootstrap snippets">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-4">
                    <div className="panel rounded shadow">
                        <div className="panel-body">
                            <div className="inner-all">
                                <ul className="list-unstyled">
                                    <li className="text-center">
                                        <img data-no-retina="" className="img-circle img-responsive img-bordered-primary" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="John Doe"/>
                                    </li>
                                    <li className="text-center">
                                        <h4 className="text-capitalize">{auth.firstName + auth.lastName}</h4>
                                        <p className="text-muted text-capitalize"> <i className="fa fa-phone"></i> {auth.phone}</p>
                                    </li>
                                    <li><br/></li>
                                    <li>
                                        <div className="btn-group-vertical btn-block">
                                            <a href="/" className="btn btn-default"><i className="fa fa-cog pull-right"></i>Edit Account</a>
                                            <a href="/" className="btn btn-default"><i className="fa fa-sign-out pull-right"></i>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-theme rounded shadow">
                        <div className="panel-heading bg-white">
                            <div className="pull-left ">
                                <h4 className="panel-title text-secondary">Contact</h4>
                            </div>
                            <div className="pull-right">
                                <a href="/" className="btn btn-sm btn-success"><i className="fa fa-facebook"></i></a>
                                <a href="/" className="btn btn-sm btn-success"><i className="fa fa-twitter"></i></a>
                                <a href="/" className="btn btn-sm btn-success"><i className="fa fa-google-plus"></i></a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="panel-body no-padding rounded">
                            <ul className="list-group no-margin">
                                <li className="list-group-item"><i className="fa fa-envelope mr-5"></i> nguyenthanhdai97@gmail.com</li>
                                <li className="list-group-item"><i className="fa fa-globe mr-5"></i> www.bootdey.com</li>
                                <li className="list-group-item"><i className="fa fa-phone mr-5"></i> 0972002914</li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="col-lg-9 col-md-9 col-sm-8">

                <div className="profile-cover">
                    <div className="cover rounded shadow no-overflow">
                        <div className="inner-cover">
                        
                            <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
                                <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="dropdown-menu pull-right no-border" role="menu">
                                    <li ><a href="/profile"><i className="fa fa-fw fa-clock-o"></i> <span>Timeline</span></a></li>
                                    <li className="active"><a href="/profile/setting"><i className="fa fa-fw fa-user"></i> <span>About</span></a></li>
                                    <li><a href="/"><i className="fa fa-fw fa-photo"></i> <span>Photos</span> <small>(98)</small></a></li>
                                    <li><a href="/"><i className="fa fa-fw fa-users"></i><span> Friends </span><small>(23)</small></a></li>
                                    <li><a href="/"><i className="fa fa-fw fa-envelope"></i> <span>Messages</span> <small>(7 new)</small></a></li>
                                </ul>
                            </div>
                            <img  src="http://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg" className="img-responsive full-width" alt="cover" style={{width: 1000, height: 200}}/>
                        </div>
                        <ul className="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
                            <li ><a href="/profile"><i className="fa fa-fw fa-clock-o"></i> <span>Timeline</span></a></li>
                            <li className="active"><a href="/profile/setting"><i className="fa fa-fw fa-user"></i> <span>About</span></a></li>
                            <li><a href="/"><i className="fa fa-fw fa-photo"></i> <span>Photos</span> <small>(98)</small></a></li>
                            <li><a href="/"><i className="fa fa-fw fa-users"></i><span> Friends </span><small>(23)</small></a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="divider"></div>
             <Profile/>
                    
                
                </div>
                </div>
                <br/>
                <div className="divider"></div>
            </div>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };  
}



export default connect(
    mapStateToProps,
)(SettingPage);


