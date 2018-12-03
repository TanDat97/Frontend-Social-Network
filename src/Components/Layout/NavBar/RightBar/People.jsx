import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap"

const avatarFollowing = { 
  height: "auto",
  width: "auto",
  maxWidth: "50px",
  maxHeight: "50px",
}

const People = () => {
  return (
    <Col xs={6} md={3}>
        <div class="panel panel-default panel-custom">
          <div class="panel-heading">
            <h3 class="panel-title">
              Followers
            </h3>
          </div>
          <div class="panel-body">
            
            <div class="media">
              <div class="media-left">
                <img src="https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" alt="" style = {avatarFollowing} className ="img-rounded"/>
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
            <a href="#FindFollower">
              <i class="glyphicon glyphicon-user"></i>  Find people you know
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
      </Col>
  )
}

export default People;


