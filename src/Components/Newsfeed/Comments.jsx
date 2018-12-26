import React from 'react';
import {NavLink} from "react-router-dom"
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'

const avatarComment = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}

const Comments = ({comments}) => {
  
    var userComment =  {
        publicKey: comments.publicKey
    }
    var text = comments.text
    console.log(comments);
    
    return (
       
        <div>
            <div className="media">

                <div className="media-body d-inline">
              
                    <div className = "container">
                        <NavLink to= { "/profile/" + userComment.publicKey}> < img style = {avatarComment} src ={userComment.avatar} size = {40} round = {true}/> </NavLink> 
                        <NavLink to = {"/profile/" + userComment.publicKey}> {userComment.displayName}     </NavLink>  
                        {text}
                    </div>
                </div>
            </div>
            <br/>
           
        </div>

    );

};
const  mapStateToProps = (state) => {
    //console.log(state.post)
    return {
      
        fireStore: state.firestore.ordered,
        
    };
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        // {collection: 'Profile'},
        // {collection: 'Post'},
    ])   
)(Comments);