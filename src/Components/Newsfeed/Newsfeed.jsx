import React, { Component } from 'react';
import {Col, Row, FormGroup,Form, FormControl, Button, Media} from "react-bootstrap";

//Action
import {postStatus} from '../../Store/Actions/postAction'
import {followFriend} from "../../Store/Actions/followActions"
//Connect redux
import { connect } from 'react-redux';
//Plugin
import InfiniteScrool from "react-infinite-scroller"
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';

import Profile from "../Layout/NavBar/LeftBar/Profile";
import People from "../Layout/NavBar/RightBar/Followings";
import Post from "./Post";

import {CommentToPost} from '../../Store/Actions/commentsActions'
import {Keypair} from "stellar-base"
import axios from "axios"
import SigninLink from '../Layout/NavBar/HeaderBar/Link/SigninLink'
import Avatar from 'react-avatar';

import LoadingSpinner from "../../Plugin/LoadingSpinner"

const avatarUser = {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
}


class Newfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            isLoading: true,
        }
    }

    handleOnClick() { 
        const publicKey = Keypair.random().publicKey();
        console.log(publicKey);
        var postReq = "/create_account/?public_key=" + publicKey
        axios.post(postReq , {
            
        })
        .then(function (response) {
          console.log(response.data);
          
        })
        .catch(function (error) {
          alert(error)
        });
    }

    
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleComments(e,eachPost){
        var comment =  {
            text: document.getElementById(eachPost.id).value,
            userComment: this.props.auth,
        }; 
        
        this.props.CommentToPost(comment,eachPost)

        document.getElementById(eachPost.id).value = ""
    }
    handleSubmit = (e)=>{
        e.preventDefault();

        var postedTime = new Date();

        var post =  {
            userPost: this.props.auth,
            postedTime: postedTime.getTime(),
            text: this.state.text,
            comments:[],
            images:[],
        }

      
        console.log(this.state.text);
        
        this.props.postStatus(post)
        this.state.text = " "
        this.props.history.replace('/')
        
    }

    
  render() {
    
    var getPost = this.props.fireStore.Post
    if(getPost && this.state.isLoading){
        console.log("loaded");
        this.setState({
            isLoading:false,
        })
    }

   if(this.state.isLoading){
    return( <div><LoadingSpinner/></div>)
   }
   else {
       getPost.sort ((a,b) =>{
           if (a.postedTime > b.postedTime)
            return -1;
        if (a.postedTime < b.postedTime)
            return 1;
        return 0
        });

        return (
            <Row>
            
                <Col xs= {6} md = {3}>
                    <Profile Follower = {this.props.follower} Following = {this.props.following}/>
                </Col>
                
                <Col xs={6} md={6}>
                    {this.props.auth.uid?
                    <div className ="card bg-light">
                    <div className = "card-body">
                        <h5 className ="card-title text-secondary">Tạo bài viết</h5>
                        <div className = "card-text">
                            <Media>
                                <Media.Left>
                                    <a className="mr-3" href="/profile">
                                    <Avatar src ={this.props.auth.photoURL} size = {50} round = {true}/>
                                    </a>
                                </Media.Left>
                                <Media.Body >
                                    <Form onSubmit = {this.handleSubmit}>
                                    <FormGroup controlId="formControlsTextarea" >
                                        <input className = "form-control" componentClass="textarea" id = "text" onChange = {this.handleChange} placeholder = "What's up?..."/>
                                    </FormGroup>
                                    <Button type="submit" className ="float-right">Post</Button>
                                    </Form>
                                    
                                    <ul className="nav">
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-user"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-map-marker"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                        
                                            <a className = "nav-link" href="/"><i className="fa fa-camera"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-smile-o"></i></a>
                                        </li>
                                    </ul>
                                </Media.Body>
                            </Media>
                        </div>
                    </div>  
                    </div>
                    :null
                    }
                    <br/>
                    {getPost.map ( (each) => {
                        console.log(each.id);
                        
                        return (
                        <div className = "animate-post">
                            <div className = "card" key = {each.id}>        
                                <div className="card-body"> 
                                    <Post post = {each} authUser = {this.props.auth} followFriend = {this.props.followFriend.bind(this)}/>
                                
                                
                                    {this.props.auth.uid?
                                    <Form >
                                    <FormGroup controlId="formControlsTextarea">
                                    <input className = "form-control" name="message-to-send" id= {each.id} placeholder="Type your message" rows="3" name = "tag" ref= "tags"></input>
                                    </FormGroup>
                                    
                                    <Button name = {each.id} onClick = {(e)=>this.handleComments(e,each)} className ="float-right">Post</Button>
                                    <ul className="nav">
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-user"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-map-marker"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-camera"></i></a>
                                        </li>
                                        <li className = "nav-item">
                                            <a className = "nav-link" href="/"><i className="fa fa-smile-o"></i></a>
                                        </li>
                                    </ul>
                                    </Form> 
                                    :null
                                    }
                                    <br/>
                                </div>                            
                            </div>
                            <br/>
                        </div>
                        )
                    })}

                    
                </Col>
                <Col xs={6} md={3}>
                    <People/>
                </Col>

                
            </Row>

            
        );
        
    }
   
    
  }
}



const  mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        follower: state.follower,
        following: state.following,
        fireStore: state.firestore.ordered
        
    };
}

const mapDispatchToProps = (dispatch) => { 
    return { 
       postStatus: (Post) => (dispatch(postStatus(Post))),
       CommentToPost: (comment, post) => (dispatch(CommentToPost(comment, post))),
       followFriend: (friend,authUser) => (dispatch(followFriend(friend,authUser))),
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
        {collection: 'Post'},
    ])   
)(Newfeed)
