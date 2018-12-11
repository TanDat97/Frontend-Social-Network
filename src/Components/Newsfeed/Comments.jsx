import React from 'react';

import {FormGroup, FormControl, Button,Form} from "react-bootstrap";
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
const avatarComment = {
    height: "30px",
    width: "30px",
    borderRadius: "50%"
}

const Comments = (comments) => {
  
var idComment = comments.comments.userComment //idcomment
var Comments = comments.comments

if(idComment)
{
    var userComment = comments.fireStore.Profile
  userComment = userComment.filter(each => each.uid == idComment)
  console.log(userComment[0])
}

    return (
       
        <div>
            <div className="media">
            
            
                <div className="media-body d-inline">
              
                    <div className = "container">
                    <a href="#fake"> < Avatar src ={userComment[0].photoURL} size = {40} round = {true}/> </a> 
                        <a href = "/"> {userComment[0].displayName}     </a>  
                        {Comments.text}
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
        {collection: 'Profile'},
        {collection: 'Post'},
    ])   
)(Comments);