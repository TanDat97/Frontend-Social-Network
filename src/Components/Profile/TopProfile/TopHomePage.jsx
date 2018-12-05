import React, { Component } from 'react';

//Connect redux
import { connect } from 'react-redux';

class TopHomePage extends Component {
    
  render() {
 
    return (
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
    );
  }
}


export default TopHomePage

