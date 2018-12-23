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
import { connect } from 'react-redux';
import axios from "axios"
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            isLoading: true,
            userProfile: null,
            paramPublicKey:null,
            authKey: null,
          };

          this.getAccountFromServer.bind(this)
    }

   

    componentWillMount() { 
        var publicKey = this.props.match.params.publicKey
        var authKey = localStorage.getItem("authKey");
        
        
        this.setState({
            paramPublicKey: publicKey,
            authKey:JSON.parse(authKey),
        })
    }

    
    getAccountFromServer () { 
        var getAmount = "/account/"
        
        
        axios.post(getAmount, {
            public_key: this.state.paramPublicKey,
        })
        .then((response) => {
            var data = response.data
            if ( data.error)  
                this.props.history.push(data.redirect)
            
            else {
                 var userProfile = {}
                 
                userProfile.amount = data.amount;            
                userProfile.displayName = data.displayName? data.displayName : "Account";
                userProfile["followings"] = data.followings ? data.followings: new Array()
                userProfile["post"] = data.post? data.post : new Array()
                userProfile["avatar"] = data.picture? "data:image/jpg;base64, " + data.picture : null

                userProfile["publicKey"] =  this.props.match.params.publicKey
                // userProfile["privateKey"] = this.state.authKey.privateKey
              
                //Khong setItem Localstorage cho authProfile 
                this.setState({ 
                    isLoading: false,
                    userProfile: userProfile,
                })  
            }
        })
        .catch( (error) => {
            console.log(error);
        });
    } 
    
    
  render() {
    var authKey = this.state.authKey
    
    if(authKey && this.state.isLoading){
    
        this.getAccountFromServer()
   
    }

    if  (this.state.isLoading) {
        return (
           <div><LoadingSpinner/></div>
            
        )
      }
    else{
        var getPost = this.state.userProfile.post        
        var userProfile = this.state.userProfile

        
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
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">About</a>
                        
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            
                            <Row>
                            <Col xs={6} md={8}>

                            <div className ="card bg-white">
                                <div className = "card-body">
                    
                            <div className = "card-text">
                                {(getPost.lenght===0)?getPost.map ( (each,index) => {
                                    return (
                                        <div key = {index}> 
                                            <Post post = {each} authUser = {userProfile}/>
                                            <br/>
                                        </div>
                                    )
                                    }): <div>No one posted yet! </div>}
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
    console.log(state);
    
    return {
        auth: state.firebase.auth,
        follower: state.follower,
        following: state.following,
        firebase: state.firebase,
        fireStore: state.firestore.ordered,
        
    };
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
        {collection: 'Post'}
    ]) 
)(HomePage);

