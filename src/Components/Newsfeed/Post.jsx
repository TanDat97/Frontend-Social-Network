import React from 'react';
import { Media, Row,Col} from "react-bootstrap";
import Avatar from 'react-avatar';
// Connect Redux
import moment from 'moment';
import Comments from "./Comments"
import  {NavLink} from "react-router-dom"
import * as timeHandle from "../../Function/TimeHandle"
import * as globalVariable from "../../Global/Variable/GlobalVariable"
import Axios from 'axios';
const avatarUser = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}



const Post = ( {post,authUser, followFriend, liketoPost}) => {
    var reactionCount = { 
        like: 0,
        love: 0,
        haha: 0,
        wow: 0,
        sad: 0,
        angry: 0,
    }

    var reactionValue = { 
        "0": {value: 0, className: "far"},
        "1": {value: 1, className: "far"},
        "2": {value: 2, className: "far"},
        "3": {value: 3, className: "far"},
        "4": {value: 4, className: "far"},
        "5": {value: 5, className: "far"},
        "6": {value: 6, className: "far"},
    }
    
    var postInfo = post.post
    var Post = { 
        contentPost: postInfo.params.content.text,
        comments: post.comments? post.comments: new Array(),
        postedTime: timeHandle.TimeToMilliSeconds(postInfo.header.time)
    }
    var userPost =  { 
        publicKey: postInfo.account,
        avatar: null,
        displayName: "",
    }
    
    var followings 
    if ( authUser.followings.addresses ) { 
        followings = authUser.followings.addresses
    }   
    else { 
        followings = authUser.followings
    }

    var reaction = post.like.map( each =>{ 
        each = JSON.parse(each)
        if (each) {
            console.log(each);
            
            switch(each.reaction) {
                case 0:
                break 
                case 1:
                    reactionCount.like++
                break;
                    
                case 2: 
                    reactionCount.love++
                break;
                    
                case 3: 
                    reactionCount.haha++
                break;
                case 4:
                    reactionCount.wow++
                break;
                case 5: 
                    reactionCount.sad++
                break;
                case 6:
                    reactionCount.angry++
                break;
            }
            if ( each.publicKey === authUser.publicKey) { 
                if (each.reaction !== 0){ 
                    reactionValue[each.reaction].value = 0
                    reactionValue[each.reaction].className = "fas"
                }
            }
            
        }
        
        
    })
    reaction = post.like.find(each => each === authUser.publicKey)
    var isExistFollowing = followings.find(each => each === userPost.publicKey)
    
    
    return (
           
                <Media>
                    <Media.Body>
                        <Media.Heading>
                            <Row>
                                <div></div>
                                <Col xs = {6} md = {1}>
                                    <NavLink to = {"/profile/" + userPost.publicKey}>< Avatar src ={userPost.avatar?userPost.avatar : globalVariable.default_avatar} size = {50} round = {true}/></NavLink>
                                </Col>
                                <Col xs = {6} className = "ml-3" md = {8}>
                                    <NavLink to = {"/profile/" + userPost.publicKey}><h6>{userPost.displayName}</h6></NavLink>
                                    <h6  className = "font-weight-light pb-2">{moment(Post.postedTime).calendar()}</h6>
                                </Col>
                              
                                {

                                    // (authProfile.followings.addresses.find( each =>each === userPost.account) || (authUser.publicKey === userPost.account))? 
                                    // null:
                                    // <Col xs = {6} className = "ml-3">
                                    // <button onClick = {() => followFriend(userPost, authUser,post)}>Follow</button>
                                    // </Col>
                                    (isExistFollowing|| (authUser.publicKey === userPost.publicKey))? 
                                    null:
                                    <Col xs = {6} className = "ml-3">
                                    <button className = "btn btn-info" onClick = {() => followFriend(userPost, authUser)}>Follow</button>
                                    </Col>
                                }
                              

                            </Row>
                        </Media.Heading>
                                
                        <p>{Post.contentPost}</p>             
                        <ul className="nav">
                       
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser,reactionValue["1"].value)}><i id="like" className={ reactionValue["1"].className + " fa-thumbs-up " }> {reactionCount.like}</i></p>
                            </li>
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser,reactionValue["2"].value)}><i id="love" className={ reactionValue["2"].className + " fa-heart "}>{reactionCount.love}</i></p>
                            </li>
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser,reactionValue["3"].value)}><i id = "haha" className={ reactionValue["3"].className + " fa-laugh-beam"}>{reactionCount.haha}</i></p>
                            </li>
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser,reactionValue["4"].value)}><i id ="wow" className={ reactionValue["4"].className + " fa-surprise"}>{reactionCount.wow}</i></p>
                            </li>
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser,reactionValue["5"].value)}><i id = "sad" className={ reactionValue["5"].className + " fa-frown-o"}>{reactionCount.sad}</i></p>
                            </li>
                            <li className = "nav-item">
                                <p className = "nav-link" onClick ={() => liketoPost(post,authUser,reactionValue["6"].value)}><i id = "angry" className={ reactionValue["6"].className + " fa-angry"}>{reactionCount.angry}</i></p>
                            </li>
                            
                        </ul>
                        <div className="dropdown-divider"></div>
                        
                        {   

                            Post.comments?
                            Post.comments.map((each,index) =>{
                                each = JSON.parse(each)
                                
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
