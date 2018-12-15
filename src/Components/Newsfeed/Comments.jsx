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

const Comments = ({comments}) => {
  
    var userComment = comments.userComment
    var text = comments.text
    console.log(userComment);
    
    return (
       
        <div>
            <div className="media">

                <div className="media-body d-inline">
              
                    <div className = "container">
                    <a href="#fake"> < Avatar src ={userComment.photoURL} size = {40} round = {true}/> </a> 
                        <a href = "/"> {userComment.displayName}     </a>  
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
        {collection: 'Profile'},
        {collection: 'Post'},
    ])   
)(Comments);