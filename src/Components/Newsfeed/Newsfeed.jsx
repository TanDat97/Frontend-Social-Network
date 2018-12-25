import React, { Component } from 'react';
import {Col, Row, FormGroup,Form, FormControl, Button, Media} from "react-bootstrap";

//Action
import {postStatus} from '../../Store/Actions/postAction'
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
          };
    }

   

    handleOnClick() { 
        const publicKey = Keypair.random().publicKey();
        console.log(publicKey);
        var postReq = "/create_account/?public_key=" + publicKey
        Axios .post(postReq , {
            
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
        // var comment =  {
        //     text: document.getElementById(eachPost.id).value,
        //     userComment: this.state.authProfile,
        // }; 
        
        // this.props.CommentToPost(comment,eachPost)

        // document.getElementById(eachPost.id).value = ""
        // var privateKey = this.state.authKey.privateKey
        // if (StrKey.isValidEd25519SecretSeed(privateKey) ) {
        //     var publicKey = Keypair.fromSecret(privateKey);
        //     publicKey = publicKey.publicKey()
        //     var getAccount = "/account/"
        //     Axios .post(getAccount, { 
        //         public_key: publicKey
        //     }).then(response => { 
        //         var data = response.data
        //         if ( data.error) { 
        //             alert(data.error)
        //             this.props.history.push(data.redirect)
        //         }
        //         else {
        //             var sequence = data.sequence + 0
        //             var postEncode = handleTransaction.encodePostTransaction(publicKey, content, privateKey, sequence)
        //             console.log(postEncode);
                    
        //             // Axios .post("/broadcast_commit",{
        //             //     enCodeTransaction: paymentEncode,
        //             // }).then(response => {
        //             //     alert(response.data.message)
        //             //     window.location.reload();
        //             // }).catch(err=> { 
        //             //     alert(err)
        //             // })
        //         }
        //     })
            
            
        // }
        // else { 
        //     alert("Invalid private key!");
        // }
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

    componentDidMount() 
    { 
        
    }
    
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
        else if ( !authProfile || isEmpty(this.props.fireStore)){ 

            return( <div><LoadingSpinner/></div>)
        }
        else {

            
            
            var getPost = this.props.fireStore.Post 
            console.log(getPost);
                 
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
                                            <input className = "form-control"  id = "contentPost" onChange = {this.handleChange} placeholder = "What's up?..."/>
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
                            console.log(each.id);
                            
                            return (
                            
                            <div className = "animate-post" key = {index}>
                            
                                <div className = "card" >        
                                    <div className="card-body"> 
                                        {/* <Post post = {each} authUser = {authProfile} followFriend = {this.props.followFriend.bind(this)} liketoPost = {this.props.liketoPost.bind(this)}/> */}
                                        <Post post = {each} authUser = {authProfile} followFriend = {1} liketoPost = {2} />
                                    
                                    
                                        {authProfile?
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
                        }): <div>No one posted yet!</div>}

                        
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
        fireStore: state.firestore.ordered
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postStatus: (post) => dispatch(postStatus(post)), 
        encodeAndCommitTX: (contentTx, privateKey, address) => dispatch(encodeAndCommitTX (contentTx, privateKey, address)),
        getAccountFromServer: (publicKey) => dispatch( getAccountFromServer(publicKey)),
    };
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Post'},
    ])   
)(Newsfeed)

