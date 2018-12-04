import React, { Component } from 'react';

const avatarUser = {
  height: "50px",
  width: "50px",
  borderRadius: "50%"
}

class HeaderBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
        <div className = "container">
          <a className="navbar-brand mb-0 h1" href="/">Forest</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/"><i className="fa fa-home fa-1x"></i>Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/notification"><i className="fa fa-bell fa-1x"></i>Notification <span className="badge badge-primary ">4</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/message"><i className="fa fa-comments fa-1x"></i>Message <span className="badge badge-primary">4</span></a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
            </form>
          </div>
          <a href = "/profile"><img alt="avatar" className="rounded-circle img-fluid" style={avatarUser}  src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"/></a>
        </div>
      </nav>
    );
  }
}

export default HeaderBar;