import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import {connect} from "react-redux"
import {signOut, createUser} from '../../../../../Store/Actions/authActions'
import Avatar from 'react-avatar';

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

import * as globalVariable from "../../../../../Global/Variable/GlobalVariable"
import Axios from 'axios';

class SigninLink extends Component {
    constructor(props) {
        super(props);
        var authKey = localStorage.getItem("authKey");
        authKey =JSON.parse(authKey)
        this.state = {
            authProfile: null,
            isLoading: true,
            authKey: authKey,
        };
    }

    handleSignOut() {
        Axios.get("/signout").then((response) => { 
            console.log(response.data);
            var data = response.data;
            alert(data.message);
            localStorage.removeItem("authProfile")
            localStorage.removeItem("authKey")
            this.props.history.push(data.redirect);
           
        })
    }

    componentDidMount() {
        var getAccount = "/account/"
      Axios.post(getAccount, {
          public_key: this.state.authKey.publicKey,
      })
      .then((response) => {
          var data = response.data
          if ( data.error)  
              this.props.history.push(data.redirect)
          
          else {
                var authProfile = {}
                
              authProfile.amount = data.amount;            
              authProfile.displayName = data.displayName? data.displayName : "Account";
              authProfile["followings"] = data.followings ? data.followings: new Array()
              authProfile["post"] = data.post? data.post : new Array()
              authProfile["avatar"] = data.picture? "data:image/jpg;base64, " + data.picture : null
              
              this.setState({ 
                  isLoading: false,
                  authProfile: authProfile,
              })  
          }
      })
      .catch( (error) => {
          console.log(error);
      });
        
    }


    render(){
        
        if(this.state.authProfile && this.state.isLoading){
            this.setState({ 
                isLoading: false,
            })  
        }
        
        if (!this.state.isLoading) {
            var authUser = this.state.authProfile
            return (
                <div>
                <NavLink to = {"/profile/"+ authUser.publicKey}><Avatar src ={authUser.avatar? authUser.avatar : globalVariable.default_avatar} size = {40} round = {true}/></NavLink>
                
                    <div className="btn-group cover-menu-mobile hidden-lg hidden-md mx-4">
                    <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu pull-right no-border " role="menu">
                        
                        
                        
                        <li><a href="/signin" onClick = {this.handleSignOut.bind(this)}><i className="fa fa-fw fa-users"></i><span> Sign Out</span></a></li>
                        
                    
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



