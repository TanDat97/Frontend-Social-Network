import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import {connect} from "react-redux"
import {signOut, createUser} from '../../../../../Store/Actions/authActions'
import Avatar from 'react-avatar';

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

import * as globalVariable from "../../../../../Global/Variable/GlobalVariable"


const SigninLink = ({authProfile, handleSignOut}) => {
    return (
        <div>
        <NavLink to = {"/profile/"+ authProfile.publicKey}><Avatar src ={authProfile.avatar? authProfile.avatar : globalVariable.default_avatar} size = {40} round = {true}/></NavLink>
        
            <div className="btn-group cover-menu-mobile hidden-lg hidden-md mx-4">
            <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bars"></i>
            </button>
            <ul className="dropdown-menu pull-right no-border " role="menu">
                
                
                
                <li><a href = "#" onClick = {() => handleSignOut()} class="dropdown-item"><i className="fa fa-fw fa-users"></i><span> Sign Out</span></a></li>
                
            
            </ul>
        </div>
    </div>
    );
};

export default SigninLink;




