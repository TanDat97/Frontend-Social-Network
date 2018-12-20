import React from 'react';
import { Media, Row,Col} from "react-bootstrap";
import Avatar from 'react-avatar';
// Connect Redux
import moment from 'moment';
import Comments from "./Comments"
import  {NavLink} from "react-router-dom"


const avatarUser = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}

const Post = ( {post,authUser, followFriend, liketoPost}) => {
    var userPost = post.userPost;
    var likeUser = post.like.find(each => each === authUser.email)
    var likeIcon = likeUser? 
                    <i className="fas fa-thumbs-up"> {post.like.length}</i> 
                    :<i className="far fa-thumbs-up"> {post.like.length}</i>
    var isExistFollowing = authUser.following.find(each => each.email === userPost.email)
    console.log(isExistFollowing)

    
    return (
           
                <Media>
                    <Media.Body>
                        <Media.Heading>
                            <Row>
                                <div></div>
                                <Col xs = {6} md = {1}>
                                    <NavLink to = {"/profile/" + userPost.publicKey}>< Avatar src ={userPost.avatar} size = {50} round = {true}/></NavLink>
                                </Col>
                                <Col xs = {6} className = "ml-3" md = {8}>
                                    <NavLink to = {"/profile/" + userPost.publicKey}><h6>{userPost.displayName}</h6></NavLink>
                                    <h6  className = "font-weight-light pb-2">{moment(post.postedTime).calendar()}</h6>
                                </Col>
                              
                                {

                                    // (userPost.follower.find( each =>each.email === authUser.email) || (authUser.email === userPost.email))? 
                                    // null:
                                    // <Col xs = {6} className = "ml-3">
                                    // <button onClick = {() => followFriend(userPost, authUser,post)}>Follow</button>
                                    // </Col>
                                    (isExistFollowing|| (authUser.email === userPost.email))? 
                                    null:
                                    <Col xs = {6} className = "ml-3">
                                    <button onClick = {() => followFriend(userPost, authUser,post)}>Follow</button>
                                    </Col>
                                }
                              

                            </Row>
                        </Media.Heading>
                                
                        <p>{post.text}</p>
                        <img className = "img-fluid" src = "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" alt=""/>                  
                        <ul className="nav">
                       
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser)}>{likeIcon}</p>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-comment"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-share-alt"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" ><i className="fa fa-share "></i></a>
                            </li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        
                        {   

                            post.comments?
                            post.comments.map((each,index) =>{
                                console.log(each);
                                
                                return (
                                    <div key = {index}>
                                    <Comments comments = {each}/> 
                                    <div className="dropdown-divider"></div>
                                    </div>
                                )
                            })
                            : null
                        }
                                            

                    </Media.Body>
                   
                </Media>
         
    );
};

export default Post;
