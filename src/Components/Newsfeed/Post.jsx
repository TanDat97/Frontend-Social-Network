import React from 'react';
import { Media} from "react-bootstrap";

// Connect Redux

import Comments from "./Comments"

const avatarUser = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}

const Post = ( {getPost}) => {
    
    return (
        <div className = "card">        
            <div className="card-body">
                <Media>
                    <Media.Body>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#fake">
                                    <img alt="" className = "img-fluid" style ={avatarUser} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"/>
                                </a>        
                            </li>
                                
                            <li className="list-inline-item">
                                <blockquote className="blockquote">
                                    <a href = "#posterProfile"><h5 className="">{getPost.userPost}</h5></a>   
                                    <footer><h6>{getPost.postTime}</h6></footer>
                                </blockquote>
                            </li>
                        </ul>
                        
                        <p>{getPost.text}</p>
                        <img className = "img-fluid" src = "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" alt=""/>                  
                        <ul className="nav">
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-thumbs-up"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-comment"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-share-alt"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" onClick={() => this.setState({showModal: true})}  ><i className="fa fa-share "></i></a>
                            </li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <Comments/>                       

                    </Media.Body>
                   
                </Media>
            </div>
        </div>
    );
};

export default Post;
