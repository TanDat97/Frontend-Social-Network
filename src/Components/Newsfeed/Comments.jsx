import React from 'react';

import {FormGroup, FormControl, Button} from "react-bootstrap";
const avatarComment = {
    height: "30px",
    width: "30px",
    borderRadius: "50%"
}

const Comments = () => {
    return (
        <div>
        <div class="media">
            <a href = ""><img class="mr-3" className = "img-fluid" style ={avatarComment} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"></img></a>
            <div class="media-body d-inline">
                <div className = "container">
                    <a href = "">Media heading</a> turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
        </div>
        <br/>
        <div class="dropdown-divider"></div>
            <FormGroup controlId="formControlsTextarea">
                <FormControl componentClass="textarea" placeholder = "Write comments here..."/>
            </FormGroup>
            
            <Button type="submit" className ="float-right">Post</Button>
            <ul className="nav">
                <li className = "nav-item">
                    <a className = "nav-link" href="/"><i class="fa fa-user"></i></a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link" href="/"><i class="fa fa-map-marker"></i></a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link" href="/"><i class="fa fa-camera"></i></a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link" href="/"><i class="fa fa-smile-o"></i></a>
                </li>
            </ul>
        </div>

    );
};

export default Comments;