import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import {connect} from "react-redux"
import {signOut, createUser} from '../../../../../Store/Actions/authActions'
import Avatar from 'react-avatar';

import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';

import * as globalVariable from "../../../../../Global/Variable/GlobalVariable"
class SigninLink extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            authUser: null,
            isLoading: true,
        };
    }


    render(){
        
        if(this.props.fireStore.Profile && this.props.fireStore.Post && this.state.isLoading){
            console.log(authUser);
            var listProfile = this.props.fireStore.Profile 
            var authUser = listProfile.find(each => each.email === this.props.auth.email)
    
            this.setState({ 
                isLoading: false,
                authUser: authUser,
            })  
           
            
        }
        
        if (!this.state.isLoading) {
            var authUser = this.state.authUser
            return (
                <div>
                <NavLink to = {"/profile/"+ authUser.publicKey}><Avatar src ={authUser.avatar? authUser.avatar : globalVariable.default_avatar} size = {40} round = {true}/></NavLink>
                
                    <div className="btn-group cover-menu-mobile hidden-lg hidden-md mx-4">
                    <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu pull-right no-border " role="menu">
                        
                        
                        
                        <li><a href="/signin" onClick = {this.props.signOut} class="dropdown-item"><i className="fa fa-fw fa-users"></i><span> Sign Out</span></a></li>
                        
                    
                    </ul>
                </div>
            </div>
            )
        }
        else {
            return (<div></div>)
        }

       
        
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



