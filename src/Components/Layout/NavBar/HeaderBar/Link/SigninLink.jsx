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
        
        <ul className = "right">
            <li> <a to = "/signin" onClick = {this.props.signOut} >Sign Out</a> </li>
            <li> <NavLink to = "/"><Avatar src ={this.props.auth.photoURL} size = {40} round = {true}/> </NavLink> </li>
            <li> <a>{this.props.auth.displayName}</a></li>
            
        </ul>
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