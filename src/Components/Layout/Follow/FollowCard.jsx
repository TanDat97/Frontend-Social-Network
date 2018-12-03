import React from 'react';

const avatarFollowing = { 
    height: "60px",
    width: "60px",
  }

const FollowCard = () => {
  return (
    <div>
      <div class="card">
        <img class="card-img-top"  src="http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg" alt="Card image cap"/>
        <div class="card-body">
        <div class="media">      
          <div class="media-body">
          <h4 class="card-title">User name<span> <a href="/" class="btn btn-primary btn-sm">Following</a> </span></h4>    
          </div>
          <img src="https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" alt="" style = {avatarFollowing} className ="ml-3 rounded-circle"/>
        </div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default FollowCard
