
import React, { Component } from 'react';

import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import {Row, Col} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import LoadingSpinner from "../../Plugin/LoadingSpinner"
//Connect redux
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
import { getAccountFromServer } from '../../Store/Actions/getAccountActions';
import { FetchPostByUser } from '../../Store/Actions/postAction';
import LeftBar from "../Layout/NavBar/LeftBar/LeftBar"
import FollowCard from "../Follow/FollowCard"
class FollowPage extends Component {
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
   
          }
    }

    componentDidMount() { 
        this.props.getAccountFromServer(this.state.paramPublicKey)
    }
    
    
  render() {
    var userProfile = this.props.getAccount.userProfile

    if  (!userProfile ) {
        return (
           <div><LoadingSpinner/></div>
            
        )
      }
    else{
        var followings = userProfile.followings
        if (followings.addresses)
            followings = followings.addresses

        if ( !followings) 	
            followings = new Array()
        return (
            <Row>
                <Col xs={6} md={3}>
                    <LeftBar userProfile = {userProfile}/>
                </Col>
            {followings.length !== 0 ? 
                <Col xs={6} md={9}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <h5>
                                        <big>FOLLOWING</big>
                                        <br/>
                                        <NavLink to={"/following/" + userProfile.publicKey}>{userProfile.followings.length}</NavLink>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card-group">
                        <Row>
                            {followings.map ( each => {
                            return (
                                <Col xs = {6} md = {4}> 
                                    <FollowCard following = {each}/>
                                </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
            
            
            :
            <Col xs={6} md={9}>
            <div class="alert alert-info">
                <center>
                    <strong>You not follow anyone yet!!</strong>
                </center>
            </div>
            </Col>
            }
            </Row>
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
   
    };
}


export default withRouter(compose(
    connect(mapStateToProps,mapDispatchToProps),
)(FollowPage));
