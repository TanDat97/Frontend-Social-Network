import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import {connect} from "react-redux"
import {signOut} from '../../../../../Store/Actions/authActions'
import Avatar from 'react-avatar';


class SigninLink extends Component {
    constructor(props) {
        super(props);
    
  
        this.state = {
  
        };
      }
    render(){
    return (
        
        
            <div>
            <NavLink to = "/profile"><Avatar src ={this.props.auth.photoURL} size = {40} round = {true}/> </NavLink>
       
                <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
                <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bars"></i>
                </button>
                <ul className="dropdown-menu pull-right no-border" role="menu">
                
                    
                    
                    <li><a href="/signin" onClick = {this.props.signOut}><i className="fa fa-fw fa-users"></i><span> Sign Out</span></a></li>
                    
                
                </ul>
            </div>
        </div>
    )
}
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        signOut: () => dispatch(signOut())
    }
}


const mapStateToProps = (state) => { 
    console.log(state);
    return { 
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SigninLink)