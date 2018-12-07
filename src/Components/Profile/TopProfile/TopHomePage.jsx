import React, { Component } from 'react';

//Connect redux
import { connect } from 'react-redux';

class TopHomePage extends Component {
    
  render() {
 
    return (
    
            
        <div className="profile-cover">
                    <div className="cover rounded shadow no-overflow">
                        <div className="inner-cover">
                        
                            <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
                                <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="dropdown-menu pull-right no-border" role="menu">
                                    <li className="active"><a href="/profile"><i className="fa fa-fw fa-clock-o"></i> <span>Timeline</span></a></li>
                                    <li><a href="/profile/setting"><i className="fa fa-fw fa-user"></i> <span>About</span></a></li>
                                    <li><a href="#"><i className="fa fa-fw fa-photo"></i> <span>Photos</span> <small>(98)</small></a></li>
                                    <li><a href="#"><i className="fa fa-fw fa-users"></i><span> Friends </span><small>(23)</small></a></li>
                                    <li><a href="#"><i className="fa fa-fw fa-envelope"></i> <span>Messages</span> <small>(7 new)</small></a></li>
                                </ul>
                            </div>
                            <img  src="http://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg" className="img-responsive full-width" alt="cover" style={{width: 1000, height: 200}}/>
                        </div>
                        <ul className="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
                            <li className="active"><a href="/profile"><i className="fa fa-fw fa-clock-o"></i> <span>Timeline</span></a></li>
                            <li><a href="/profile/setting"><i className="fa fa-fw fa-user"></i> <span>About</span></a></li>
                            <li><a href="#"><i className="fa fa-fw fa-photo"></i> <span>Photos</span> <small>(98)</small></a></li>
                            <li><a href="#"><i className="fa fa-fw fa-users"></i><span> Friends </span><small>(23)</small></a></li>
                            
                        </ul>
    
                    </div>
                   
                </div>

                
             
    );
  }
}


export default TopHomePage

