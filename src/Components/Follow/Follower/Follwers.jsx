import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import { connect } from 'react-redux';

import LeftBar from '../../Layout/NavBar/LeftBar/LeftBar';
import FollowerCard from './FollowerCard';
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import {NavLink} from "react-router-dom"
import LoadingSpinner from "../../../Plugin/LoadingSpinner"

class Follower extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            paramPublicKey: null,
            authProfile: {},
        }
    }

    componentWillMount() { 
        var public_key = this.props.match.params.publicKey;
        this.setState({
            paramPublicKey: public_key,
        })
    }

    render() {
        var listProfile = this.props.fireStore.Profile

        if(this.state.paramPublicKey && listProfile && this.state.isLoading){
            var userProfile = listProfile.find(each => each.publicKey === this.state.paramPublicKey)
            if (userProfile) { 
                this.setState({
                    userProfile: userProfile,
                    isLoading: false,
                })
            }
        }

        if(!this.state.isLoading)
        {
            var userProfile = this.state.userProfile
            console.log(userProfile);
            
            return (
                <Row>
                    <Col xs={6} md={3}>
                    <LeftBar userProfile = {userProfile}/>
                    </Col>
                    <Col xs={6} md={9}>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            <small>FOLLOWING</small>
                                            <br/>
                                            <NavLink to={"/following/" + userProfile.publicKey}>{userProfile.following.length}</NavLink>
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>
                                            <big>FOLLOWER</big>
                                            <br/>   
                                            <NavLink to={"/follower/" + userProfile.publicKey}>{userProfile.follower.length}</NavLink>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="card-group">
                            <Row>
                                {
                                   userProfile.follower.map ( each => {
                                    return (
                                        <Col xs = {6} md = {4}> 
                                            <FollowerCard follower = {each}/>
                                        </Col>
                                        )
                                })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            );
        }
        else{
            return( <div><LoadingSpinner/></div>)
        }
    }
}

const  mapStateToProps = (state) => {
    return {
        following: state.following,
        follower: state.follower,
        fireStore: state.firestore.ordered,
        auth: state.firebase.auth
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
    ])   
    )(Follower)