import React, { Component } from 'react';
import {Col, Row, FormGroup,Form, FormControl, Button, Media} from "react-bootstrap";

//Action
import {postStatus, FetchPostByPage} from '../../Store/Actions/postAction'
import {followFriend} from "../../Store/Actions/followActions"
//Connect redux
import { connect } from 'react-redux';
//Plugin

import { compose } from 'redux'
import { firestoreConnect, isEmpty } from 'react-redux-firebase';

import LeftBar from "../Layout/NavBar/LeftBar/LeftBar";
import RightBar from "../Layout/NavBar/RightBar/RightBar";
import Post from "./Post";

import {CommentToPost} from '../../Store/Actions/commentsActions'
import {liketoPost} from '../../Store/Actions/likeActions'
import {Keypair} from "stellar-base"


import Avatar from 'react-avatar';
import {encodeAndCommitTX} from "../../Store/Actions/transactionActions"
import {getAccountFromServer} from "../../Store/Actions/getAccountActions"
import LoadingSpinner from "../../Plugin/LoadingSpinner"
import {NavLink} from "react-router-dom"
import * as globalVariable from "../../Global/Variable/GlobalVariable"
import { StrKey } from 'stellar-base/lib/strkey';
import Axios from 'axios';
import * as handleTransaction from "../../Function/HandleTransaction"


// const avatarUser = {
//     height: "50px",
//     width: "50px",
//     borderRadius: "50%"
// }


class Newsfeed extends Component {
    constructor(props) {
        super(props);
        var authKey = localStorage.getItem("authKey")
        authKey = JSON.parse(authKey)
        var authProfile = localStorage.getItem("authProfile")
        authProfile = JSON.parse(authProfile)
        this.state = {
            paramPublicKey:null,
            authKey: authKey?authKey:null,
            authProfile: authProfile?authProfile:null,
            page:1,
          };

          this.loadMorePost = this.loadMorePost.bind(this)
          this.handleFollowFriend = this.handleFollowFriend.bind(this)
          this.handleLikePost = this.handleLikePost.bind(this)
          this.handleComments = this.handleComments.bind(this)
    }   
  
    handleComments(e,eachPost, authProfile, index){
        e.preventDefault()
        var hash = eachPost.post.header.data_hash;
        var comment = { 
            type: 1, 
            text: document.getElementById(index).value, 
        }
        
        
        var contentTx = {
            type: "comment",
            data: {
                comment,
                hash,
            },
            props: this.props
        }
        this.props.encodeAndCommitTX(contentTx,authProfile.privateKey)
        
        console.log(eachPost);
        document.getElementById(index).value = ""
        
    }
 
    handleSubmit = (e)=>{
        e.preventDefault();

        var privateKey = this.state.authKey.privateKey
        var contentPost = document.getElementById("contentPost").value
        var authProfile = this.state.authProfile
        
        
        if (StrKey.isValidEd25519SecretSeed(privateKey)  && authProfile) {
            var contentTx = {
            type: "post",
            contentPost: contentPost,
            }
            this.props.encodeAndCommitTX(contentTx,privateKey,null)  
        }
        else { 
            alert("Invalid private key!");
        }

        document.getElementById("contentPost").value = ""
        
    }
    loadMorePost (page) { 
        this.setState({
            page: page,
        })

        this.props.FetchPostByPage(this.state.page)
    } 
    handleFollowFriend(userPost, authProfile) { 
               // var f1 = "GBFNM2W3QNSPR4KGY4FNEF6YUF7STM5LF5VOARFCCQCSLPZMSEQTZ4MU";
//     var f2 = "GCXEQNLGRDKEPUPLCZRGXYKAUQSI4Y56OHJPM4N35ZYZGH4LXMVUK5SD";
//     var follwing= {
//         addresses: [ base32.decode(f1), base32.decode(f2), ]
//     }
//     var updateParams = Buffer.from(Followings.encode(follwing));

        var followings = authProfile.followings
        if ( followings.addresses)
            followings = followings.addresses

        followings =  { 
            addresses: [...followings,userPost.publicKey],
        }
        
        var contentTx = {
            type: "update_follow",
            followings: followings,
        }
        
        this.props.encodeAndCommitTX(contentTx,authProfile.privateKey)

        console.log(followings);
        console.log(authProfile);
        
    }

    handleLikePost(post,authProfile, index){
        var hash = post.post.header.data_hash;
        var react = { 
            type: 2, 
            reaction: parseInt(index), 
        }
       
        
        
        var contentTx = {
            type: "react",
            data: {
                react,
                hash,
            }
        }
        this.props.encodeAndCommitTX(contentTx,authProfile.privateKey)
        
        
    }

    componentDidMount() 
    { 
        this.props.FetchPostByPage(this.state.page)
    }

    // componentDidUpdate() {
    //     console.log(123);
    //     this.props.FetchPostByPage(this.state.page)
    // }
    
  render() 
    {
        var authProfile = this.state.authProfile
        
        
        if(localStorage.length === 0){
            return(
                    <div class="alert alert-info">
                    <center>
                        <strong>Login to explore more..!!</strong>
                    </center>
                </div>
            )
        }
        else if ( !authProfile  ||  !this.props.getPost){ 

            return( <div><LoadingSpinner/></div>)
        }
        else {

            
            
            var getPost = this.props.getPost.data
            
            try {
                getPost.map ( each => each.post = JSON.parse(each.post)) 
            }
            catch(err) {
                console.log(err);
                
            }
            getPost = getPost.slice().sort ((a,b) =>{
                if (a.post.header.time > b.post.header.time)
                    return -1;
                if (a.post.header.time < b.post.header.time)
                    return 1;
                return 0
            });
            
            return (
                <Row>
                    
                    <Col xs= {6} md = {3}>
                        <LeftBar userProfile = {authProfile}/>
                    </Col>
                    
                    <Col xs={6} md={6}>
                        {authProfile?
                        <div className ="card bg-light">
                        <div className = "card-body">
                            <h5 className ="card-title text-secondary">Tạo bài viết</h5>
                            <div className = "card-text">
                                <Media>
                                    <Media.Left>
                                    <a className="mr-3" href="/profile">
                                        <NavLink to = {"/profile/" + authProfile.publicKey}><Avatar src ={authProfile.avatar? authProfile.avatar: globalVariable.default_avatar} size = {40} round = {true}/> </NavLink>
                                        
                                    </a>
                                    </Media.Left>
                                    <Media.Body className = "ml-3" >
                                        <Form onSubmit = {this.handleSubmit}>
                                        <FormGroup controlId="formControlsTextarea" >
                                            <input className = "form-control"  id = "contentPost" placeholder = "What's up?..."/>
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
                        {authProfile?<div><br/></div>:null} 
                        {(getPost.lenght !== 0 )?getPost.map ( (each,index) => {
                            return (
                            
                            <div className = "animate-post" key = {index}>
                            
                                <div className = "card" >        
                                    <div className="card-body"> 
                                        {/* <Post post = {each} authUser = {authProfile} followFriend = {this.props.followFriend.bind(this)} liketoPost = {this.props.liketoPost.bind(this)}/> */}
                                        <Post post = {each} authUser = {authProfile} followFriend = {this.handleFollowFriend} liketoPost = {this.handleLikePost} />
                                    
                                    
                                        {authProfile?
                                        <Form >
                                        <FormGroup controlId="formControlsTextarea">
                                        <input className = "form-control" name="message-to-send" id= {index} placeholder="Type your message" rows="3" name = "tag" ref= "tags"></input>
                                        </FormGroup>
                                        
                                        <Button name = {each.id} onClick = {(e)=>this.handleComments(e,each ,authProfile,index)} className ="btn btn-success float-right">Comment</Button>
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
                        }): <div>No one posted yet!</div>}

                        <center><button className = "btn btn-primary" onClick = {() => this.loadMorePost(this.state.page+1) }>Reload</button></center>
                    </Col>
                    <Col xs={6} md={3}>
                        <RightBar userProfile = {authProfile}/>
                    </Col>

                    
                </Row>

                
            );
            
        }


    }
}



// const  mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         auth: state.firebase.auth,
//         follower: state.follower,
//         following: state.following,
//         fireStore: state.firestore.ordered
        
//     };
// }

// const mapDispatchToProps = (dispatch) => { 
//     return { 
//        postStatus: (Post) => (dispatch(postStatus(Post))),
//        CommentToPost: (comment, post) => (dispatch(CommentToPost(comment, post))),
//        followFriend: (friend,authUser,post) => (dispatch(followFriend(friend,authUser,post))),
//        liketoPost: (post, userLike) => (dispatch(liketoPost(post,userLike)))
//     }
// }


// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect((props) => [
//         {collection: 'Profile'},
//         {collection: 'Post'},
//     ])   
// )(Newsfeed)

function mapStateToProps(state) {
    return {
        getAccount: state.getAccount,
        getPost: state.post,
        fireStore: state.firestore.ordered
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postStatus: (post) => dispatch(postStatus(post)), 
        encodeAndCommitTX: (contentTx, privateKey, address) => dispatch(encodeAndCommitTX (contentTx, privateKey, address)),
        getAccountFromServer: (publicKey) => dispatch( getAccountFromServer(publicKey)),
        FetchPostByPage: (page) => dispatch(FetchPostByPage(page))
    };
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        // {collection: 'Post'},
    ])   
)(Newsfeed)

