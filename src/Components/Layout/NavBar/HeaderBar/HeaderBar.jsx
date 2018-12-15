import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SigninLink from './Link/SigninLink'
import SignoutLink from './Link/SignoutLink'
import {connect} from 'react-redux'
import { compose } from 'redux'


import LoadingSpinner from "../../../../Plugin/LoadingSpinner"
const avatarUser = {
  height: "50px",
  width: "50px",
  borderRadius: "50%"
}

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
   
    }        
}

  render() {
    const links = this.props.auth.uid ? <SigninLink /> : <SignoutLink/>
    console.log(links)
    console.log(this.props.auth)

    
    if(links){
      return (
       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
          <div className = "container">
            <a className="navbar-brand mb-0 h1" href="/">Forest</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto "></ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
              
              </form>
              {links}
            </div>
        
          </div>
  
        </nav>
   
      )
    }
    else{
      return (<div><LoadingSpinner/></div>)
    }
    
  }
}

const mapStateToProps = (state) => { 
  console.log(state);
  return { 
      auth: state.firebase.auth
  }
}

export default compose(connect(mapStateToProps))(HeaderBar)
