import React from 'react';

const avatarFollowing = { 
    height: "60px",
    width: "60px",
  }

const FollowerCard = (props) => {
  const Card = props.Card;
  return (
    <div>
      <div className="card">
        <img className="card-img-top"  src={Card.avatar} alt="Card image cap"/>
        <div className="card-body">
        <div className="media">      
          <div className="media-body">
          <h4 className="card-title">{Card.name}<span> <a href="/" className="btn btn-primary btn-sm">Following</a> </span></h4>    
          </div>
          <img src={Card.avatar} alt="" style = {avatarFollowing} className ="ml-3 rounded-circle"/>
        </div>
        <p className="card-text">{Card.text}</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default FollowerCard
