import React from 'react';
import * as globalVariable from "../../../../Global/Variable/GlobalVariable"
import {NavLink} from "react-router-dom"
const avatarFollowing = { 
  height: "auto",
  width: "auto",
  maxWidth: "60px",
  maxHeight: "60px",
}

const Followings = ({userProfile}) => {
  var followings = userProfile.followings.addresses
  
  return (
    <div>
      <div className = "card">
        <div className = "card-body">
          <NavLink to = {"/following/" + userProfile.publicKey}><h5 className ="card-title text-secondary">Followings</h5></NavLink>
          {  followings.map(each => { 
            var avatar = each.avatar? each.avatar : globalVariable.default_avatar
            return (
              
            <div className="media text-truncate">
                  <img src= {avatar} alt="" style = {avatarFollowing} className ="mr-3"/>
                  <div className="media-body">
                    <NavLink to = {"/profile/" + each}><h6 className="mt-0">{each}</h6></NavLink>
                    <p><i className="fa fa-user"></i></p>
                </div>
            </div>
            )
          })}
         
        </div>
        <div className="card-footer">
          <a href={"/following/" + userProfile.publicKey}><i className="fa fa-user"></i> All people you following</a>
        </div>
      </div>
      <br/>
      <div className = "card">
        <div className = "card-body">
          <h5 className ="card-title text-secondary">@Forest Copr</h5>
          <ul className="list-inline">
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Followings;


