import React from 'react';
import { Media, Row,Col} from "react-bootstrap";
import Avatar from 'react-avatar';
// Connect Redux
import moment from 'moment';
import Comments from "./Comments"
import { isEmpty } from 'react-redux-firebase';
import { followFriend } from '../../Store/Actions/followerActions';


const avatarUser = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}

const Post = ( {post,authUser, followFriend}) => {
    
    console.log(post);
    
    var friend = post.userPost;
    
    
    return (
                <Media>
                    <Media.Body>
                        <Media.Heading>
                            <Row>
                                <Col xs = {6} md = {1}>
                                    < Avatar src ={post.userPost.photoURL} size = {40} round = {true}/>
                                </Col>
                                <Col xs = {6} md = {8}>
                                    <h5>{post.userPost.displayName}</h5>
                                    <h6>{moment(post.postedTime).calendar()}</h6>
                                </Col>

                                {authUser.uid? 
                                <Col xs = {6} md = {3}>
                                <button onClick = {() => followFriend(friend, authUser)}>Follow</button>
                                </Col>
                                :null}

                            </Row>
                        </Media.Heading>

                        <p>{post.text}</p>
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
                        
                        {   

                            post.comments?
                            post.comments.map(each =>{
                                console.log(each);
                                
                                return (
                                    <div>
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
