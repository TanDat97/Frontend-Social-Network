import React from 'react';

const avatarFollowing = { 
    height: "60px",
    width: "60px",
  }

const FollowerCard = (props) => {
  const Card = props.Card;
  return (
    <div>
      <div class="card">
        <img class="card-img-top"  src={Card.image} alt="Card image cap"/>
        <div class="card-body">
        <div class="media">      
          <div class="media-body">
          <h4 class="card-title">{Card.name}<span> <a href="/" class="btn btn-primary btn-sm">Following</a> </span></h4>    
          </div>
          <img src={Card.avatar} alt="" style = {avatarFollowing} className ="ml-3 rounded-circle"/>
        </div>
        <p class="card-text">{Card.text}</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default FollowerCard
