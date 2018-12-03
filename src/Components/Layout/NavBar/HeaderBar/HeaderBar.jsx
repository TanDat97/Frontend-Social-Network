import React, { Component } from 'react';

class HeaderBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div className = "container">
          <a class="navbar-brand mb-0 h1" href="/">Forest</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/"><i class="fa fa-home fa-1x"></i>Home<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <button class="nav-link btn btn-outline-primary" href="#"><i class="fa fa-bell fa-1x"></i>Notification <span class="badge badge-primary">4</span></button>
              </li>
              <li class="nav-item">
                <button class="nav-link btn btn-outline-primary" href="#"><i class="fa fa-comments fa-1x"></i>Message <span class="badge badge-primary">4</span></button>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
              <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderBar;