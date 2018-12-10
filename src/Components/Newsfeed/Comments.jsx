import React from 'react';

import {FormGroup, FormControl, Button,Form} from "react-bootstrap";
const avatarComment = {
    height: "30px",
    width: "30px",
    borderRadius: "50%"
}

const Comments = (comments) => {
  
 
    return (
       
        <div>
            <div className="media">
                <a href = ""><img className="mr-3" className = "img-fluid" style ={avatarComment} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"></img></a>
                <div className="media-body d-inline">
                    <div className = "container">
                        <a href = "/">{comments.comments.Profile[0].id}</a> {comments.comments.text}
                    </div>
                </div>
            </div>
            <br/>
           
        </div>

    );
};

export default Comments;