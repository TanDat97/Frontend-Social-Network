import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import {connect} from "react-redux"
import {signOut, createUser} from '../../../../../Store/Actions/authActions'
import Avatar from 'react-avatar';

import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
class SigninLink extends Component {
    constructor(props) {
        super(props);
    
  
        this.state = {
            isLoaded: false,
        };
      }
    render(){
        const userLog = this.props.auth
        var listProfile = this.props.fireStore.Profile
        var authProfile
        if ( listProfile && userLog) {
            listProfile =  listProfile.filter( each => each.uid === userLog.uid)
          
             authProfile = listProfile[0]
             
             if(userLog.uid && !authProfile.uid){
                 this.props.createUser(userLog)
              
             }
         }
        

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
        signOut: () => dispatch(signOut()),
        createUser: (user) => dispatch(createUser(user)),
    }
}


const mapStateToProps = (state) => { 
    console.log(state);
    return { 
        auth: state.firebase.auth,
        fireStore: state.firestore.ordered,
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
        {collection: 'Post'},
    ])   
)(SigninLink)