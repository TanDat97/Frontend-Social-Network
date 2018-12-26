import React from 'react';
import * as globalVariable from "../../Global/Variable/GlobalVariable"
import { Account } from 'stellar-base';
import {NavLink} from "react-router-dom"
const avatarFollowing = { 
    height: "60px",
    width: "60px",
  }

  const cardStyle = {
    height: "200px",
    overflow: "hidden"
  } 

const FollowCard = (props) => {
  const following = props.following;
  var cover_picture = following.cover_picture ? following.cover_picture : globalVariable.default_cover_picture
  var avatar = following.avatar ? following.avatar : globalVariable.default_avatar
  console.log(props)
  return (
    <div>
      <div className="card" style = {cardStyle}>
        <img className="card-img-top"  src= {cover_picture} alt=""/>
        <div className="card-body">
          <div className="media">      
            <div className="media-body">
            <h4 className="card-title">
              {/* {following.displayName?following.displayName:"Account"} */}
              <NavLink to = {"/profile/" + following}><h6 className="mt-0">{props.displayName?props.displayName:"Account"}</h6></NavLink>
            </h4>    
            {/* <span> <p className="text-sm ">Followed</p> </span>    */}
            <span> <a href="#" className="btn btn-danger btn-sm">Followed</a> </span> 
            </div>
            <img src={avatar} alt="" style = {avatarFollowing} className ="ml-3 rounded-circle"/>
          </div>
          <p className="card-text">{following.text}</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default FollowCard
