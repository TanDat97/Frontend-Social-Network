import React from 'react';
import { Media, Row,Col} from "react-bootstrap";
import Avatar from 'react-avatar';
// Connect Redux
import moment from 'moment';
import Comments from "./Comments"
import { isEmpty } from 'react-redux-firebase';

const avatarUser = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}

const Post = ( {getPost}) => {
    console.log(getPost.comments)
    
    
    
    return (
                <Media>
                    <Media.Body>
                        <Media.Heading>
                        {/* <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#fake">
                               < Avatar src ={getPost.userPost.photoURL} size = {40} round = {true}/>
                                </a>        
                            </li>
                                
                            <li className="list-inline-item">
                                <blockquote className="blockquote">
                                    <a href = "#posterProfile"><h5 className="">{getPost.userPost.displayName}</h5></a>   
                                    <footer><h6>{getPost.postTime}</h6></footer>
                                </blockquote>
                            </li>
                        </ul> */}
                            <Row>
                                <Col xs = {6} md = {1}>
                                    < Avatar src ={getPost.userPost.photoURL} size = {40} round = {true}/>
                                </Col>
                                <Col xs = {6} md = {8}>
                                    <h5>{getPost.userPost.displayName}</h5>
                                    <h6>{moment(getPost.postedTime).calendar()}</h6>
                                </Col>

                                <Col xs = {6} md = {3}>
                                    <h5>Follow</h5>
                                </Col>

                            </Row>
                        </Media.Heading>

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
                        
                        {   

                            getPost.comments?
                            getPost.comments.map(each =>{
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
