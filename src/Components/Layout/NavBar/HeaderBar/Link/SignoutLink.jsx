import React from 'react';
import { NavLink } from 'react-router-dom'


const SignoutLink = () => { 
    return (
        
        <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
        <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bars"></i>
        </button>
        <ul className="dropdown-menu pull-right no-border" role="menu">
           
            
            
            <li><a href="/signup" class="dropdown-item"><i className="fa fa-fw fa-users"></i><span> Sign Up</span></a></li>
            <li><a href="/signin" class="dropdown-item"><i className="fa fa-fw fa-users"></i><span> Sign In</span></a></li>
            
           
        </ul>
    </div>
        
    )
}




export default SignoutLink