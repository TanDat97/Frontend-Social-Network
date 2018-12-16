import React, { Component } from 'react';
import Post from '../Newsfeed/Post'
import Profile from "../Layout/NavBar/LeftBar/Profile"
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
          };
    }

    componentDidMount(){ 
        var pathName = this.props.history.location.pathname;
        var public_key = pathName.split("/");
        public_key = public_key[2]
        console.log(public_key);
        
        
        var getAmmount = "/account/calculate_amount/"
        axios.post(getAmmount, {
            public_key: "GCXEQNLGRDKEPUPLCZRGXYKAUQSI4Y56OHJPM4N35ZYZGH4LXMVUK5SD", // Truyen publickey tu params
          })
          .then((response) => {
            var data = response.data;
            this.setState({
                isLoading: false,
                amount: data.amount
              });    
          })
          .catch( (error) => {
            console.log(error);
          });
    }
    
    
  render() {

    var userLog = this.props.auth
    var post = this.props.fireStore.Post
    if(this.props.fireStore.Post && userLog && this.state.isLoading){
        this.setState({
            isLoading: false,
        })
    }

    if ( this.state.isLoading ) {
       return (<div><LoadingSpinner/></div>)
    }
    else {
        var getPost = this.props.fireStore.Post
        return (
            <div className = "animate-post">
                
                <div >
                <Row>
                    <LeftHomePage />
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
                                    {getPost.map ( each => {
                                        return (
                                            <div> 
                                                <Post post = {each} authUser = {this.props.auth}/>
                                                <br/>
                                            </div>
                                        )
                                        })}
                                </Col>
                                <Col xs= {6} md = {4}>
                                    <Profile Follower = {this.props.follower} Following = {this.props.following}/>
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
    console.log(state.post)
    return {
        //post: state.post,
        auth: state.firebase.auth,
        follower: state.follower,
        //auth: state.auth,
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

