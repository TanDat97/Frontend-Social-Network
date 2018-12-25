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
          };

          this.getAmountAccountFromServer.bind(this)
    }

   

    componentWillMount() { 
        var pathName = this.props.history.location.pathname;
        
        var public_key = pathName.split("/");
        public_key = public_key[2]

        this.setState({
            paramPublicKey: public_key,
        })
    }

    
   getAmountAccountFromServer (userProfile) { 
        var getAmount = "/account/"
        
        axios.post(getAmount, {
            public_key: this.state.paramPublicKey, // Truyen publickey tu params
        })
        .then((response) => {
            var data = response.data;
            userProfile.amount = data.amount;            

            this.setState({
                userProfile: userProfile,
            })
            
            console.log(this.state.userProfile);
            
        })
        .catch( (error) => {
            console.log(error);
        });
   } 
    
    
  render() {
    
    if(this.props.fireStore.Profile && this.props.fireStore.Post && this.state.isLoading){
        
        var listProfile = this.props.fireStore.Profile 
        var userProfile = listProfile.find(each => each.publicKey === this.state.paramPublicKey)
        console.log(this.state.paramPublicKey);
        
        this.getAmountAccountFromServer(userProfile)

        this.setState({ 
            isLoading: false,
            userProfile: userProfile,
        })  
    }

    if  (this.state.isLoading) {
        return (
           <div><LoadingSpinner/></div>
            
        )
      }
    else{
        var getPost = this.props.fireStore.Post
        console.log(getPost);
        var userProfile = this.state.userProfile
        console.log(userProfile);
        
        return (
            <div className = "animate-post">
                
                <div >
                <Row>
                    <LeftHomePage userProfile = {userProfile}  />
                    <Col lg = {9} md = {9} sm = {8}>
                    <TopHomePage/>
                    
                   
                    <br/>
                 
                    <nav>
              
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">About</a>
                        <a className ="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            
                            <Row>
                            <Col xs={6} md={8}>

                            <div className ="card bg-white">
                                <div className = "card-body">
                    
                            <div className = "card-text">
                                {getPost.map ( (each,index) => {
                                    return (
                                        <div key = {index}> 
                                            <Post post = {each} authUser = {userProfile}/>
                                            <br/>
                                        </div>
                                    )
                                    })}
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
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
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
    console.log(state.firestore.ordere)
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

