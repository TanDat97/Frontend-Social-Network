import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div class="col-sm-3">
        <div class="panel panel-default panel-custom">
          <div class="panel-heading">
            <h3 class="panel-title">
              Who to follow
              <small><a href="#">Refresh</a> ● <a href="#">View all</a></small>
            </h3>
          </div>
          <div class="panel-body">
            <div class="media">
              <div class="media-left">
                <img src="http://placehold.it/32x32" alt="" class="media-object img-rounded"/>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Nome e cognome</h4>
                <a href="#" class="btn btn-default btn-xs">
                  +
                  <span class="glyphicon glyphicon-user"></span>
                  Follow
                </a>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <img src="http://placehold.it/32x32" alt="" class="media-object img-rounded"/>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Nome e cognome</h4>
                <a href="#" class="btn btn-default btn-xs">
                  +
                  <span class="glyphicon glyphicon-user"></span>
                  Follow
                </a>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <img src="http://placehold.it/32x32" alt="" class="media-object img-rounded"/>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Nome e cognome</h4>
                <a href="#" class="btn btn-default btn-xs">
                  +
                  <span class="glyphicon glyphicon-user"></span>
                  Follow
                </a>
              </div>
            </div>
          </div>
          <div class="panel-footer">
            <a href="www.google.it">
              <span class="glyphicon glyphicon-user"></span>
              Find people you know
            </a>
          </div>
        </div>
        <div class="well well-sm">
          <ul class="list-inline">
            <li>© 2015 Twitter</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Ads info</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Businesses</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Developers</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;


