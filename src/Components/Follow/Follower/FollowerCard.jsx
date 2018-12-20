import React from 'react';
import * as globalVariable from "../../../Global/Variable/GlobalVariable"
const avatarFollowing = { 
    height: "60px",
    width: "60px",
  }

const FollowerCard = (props) => {
  const follower = props.follower;
  var cover_picture = follower.cover_picture ? follower.cover_picture : globalVariable.default_cover_picture
  var avatar = follower.avatar ? follower.avatar : globalVariable.default_avatar
  
  return (
    <div>
       <div className="card">
        <img className="card-img-top"  src= {cover_picture} alt="Card image cap"/>
        <div className="card-body">
        <div className="media">      
          <div className="media-body">
          <h4 className="card-title">
            {follower.displayName}
          </h4> 
          <span> <a href="/" className="btn btn-primary btn-sm">Following</a> </span>   
          </div>
          <img  src={avatar} alt="" style = {avatarFollowing} className ="ml-3 rounded-circle"/>
        </div>
        <p className="card-text">{follower.text}</p>
        </div>
      </div>
      <br/> 
    </div>
  )
}

export default FollowerCard
