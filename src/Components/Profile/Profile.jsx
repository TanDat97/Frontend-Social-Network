import React, { Component } from 'react';
import Post from '../Newsfeed/Post'
import LeftBar from "../Layout/NavBar/LeftBar/LeftBar"
import {Col, Row,Tab,Tabs} from "react-bootstrap"
import LeftHomePage from './LeftProfile/LeftHomePage'
import TopHomePage from './TopProfile/TopHomePage'
import AboutProfile from "./About/AboutProfile"
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';

import LoadingSpinner from "../../Plugin/LoadingSpinner"
//Connect redux
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
import { getAccountFromServer } from '../../Store/Actions/getAccountActions';
import { FetchPostByUser } from '../../Store/Actions/postAction';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paramPublicKey:null,
            authKey: null,
          };
    }

   

    componentWillMount() {
        var publicKey = this.props.match.params.publicKey
        var authKey = localStorage.getItem("authKey");

        this.setState({
            paramPublicKey: publicKey,
            authKey:JSON.parse(authKey),
            
        }) 

    }

   

    componentDidUpdate(prevProps) { 
        if (this.props.match.params.publicKey !== prevProps.match.params.publicKey) {
            var publicKey = this.props.match.params.publicKey
            this.setState({
                paramPublicKey: publicKey,
            })
            this.props.getAccountFromServer(publicKey)
            this.props.FetchPostByUser(this.props.match.params.publicKey)
          }
    }

    componentDidMount() { 
        this.props.getAccountFromServer(this.state.paramPublicKey)
        this.props.FetchPostByUser(this.props.match.params.publicKey)
    }
    
    
  render() {
    var userProfile = this.props.getAccount.userProfile
    var getPost = this.props.post.data
    console.log(getPost);
    
    if  (!userProfile || !getPost ) {
        return (
           <div><LoadingSpinner/></div>
            
        )
      }
    else{
        
        var getPost = this.props.post.data
        console.log(getPost);
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
            <div className = "animate-post">
                
                <div >
                <Row>
                    <LeftHomePage userProfile = {userProfile} authKey = {this.state.authKey}  />
                    <Col lg = {9} md = {9} sm = {8}>
                    <TopHomePage/>
  
                    <br/>
                 
                    <nav>
              
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                        {userProfile.publicKey !== this.state.authKey.publicKey 
                            ? null:
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Update</a>    
                        }
                        
                        
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            
                            <Row>
                            <Col xs={6} md={8}>

                            <div className ="card bg-white">
                                <div className = "card-body">
                    
                            <div className = "card-text">
                            {(getPost.lenght !== 0 )?getPost.map ( (each,index) => {
                            return (
                            
                            <div className = "animate-post" key = {index}>
                            
                                <div className = "card" >        
                                    <div className="card-body"> 
                                        {/* <Post post = {each} authUser = {authProfile} followFriend = {this.props.followFriend.bind(this)} liketoPost = {this.props.liketoPost.bind(this)}/> */}
                                        <Post post = {each} authUser = {userProfile}  />
                                        <br/>
                                    </div>                            
                                </div>
                                <br/>
                            </div>
                            
                            )
                        }): <div>No one posted yet!</div>}
                                </div>
                            </div>
                            </div>  
                            </Col>
                            <Col xs= {6} md = {4}>
                            <LeftBar userProfile = {userProfile}/>
                                </Col>
                        </Row>
                                   
                               
                        
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <AboutProfile/>
                    </div>
                    </div>
                     
                        
                     </Col>
                </Row>
                </div>
            </div>
        );
    }
  }
}


const  mapStateToProps = (state) => {
    return {
        getAccount: state.getAccount,
        fireStore: state.firestore.ordered,
        post: state.post,
    };
}

const  mapDispatchToProps = (dispatch) => {
    return {
        getAccountFromServer: (publicKey) => dispatch( getAccountFromServer(publicKey)),
        FetchPostByUser:(publicKey) => dispatch(FetchPostByUser(publicKey))
    };
}


export default withRouter(compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props) => [
        // {collection: 'Profile'},
        // {collection: 'Post'}
    ]) 
)(HomePage));


