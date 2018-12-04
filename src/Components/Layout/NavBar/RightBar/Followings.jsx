import React from 'react';

const avatarFollowing = { 
  height: "auto",
  width: "auto",
  maxWidth: "60px",
  maxHeight: "60px",
}

const Followings = () => {
  return (
    <div>
      <div className = "card">
        <div className = "card-body">
          <a href = "thayTenOday/following"><h5 className ="card-title text-secondary">Followings</h5></a>
          <div className="media">
            <img src="https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" alt="" style = {avatarFollowing} className ="mr-3"/>
            <div className="media-body">
              <h6 className="mt-0">Nome e cognome</h6>
              <button href="#" className="btn btn-default btn-xs">+<i className="fa fa-user"></i>
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <a href="#FindFollower"><i className="fa fa-user"></i> Find people you know</a>
        </div>
      </div>
      <br/>
      <div className = "card">
        <div className = "card-body">
          <h5 className ="card-title text-secondary">@Forest Copr</h5>
          <ul className="list-inline">
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
            <li className = "list-inline-item"><a href="/">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Followings;


