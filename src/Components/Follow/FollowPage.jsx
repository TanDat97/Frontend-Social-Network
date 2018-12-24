import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux"
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import {Row, Col} from "react-bootstrap";

import FollowingCard from './Following/FollowingCard';
import {NavLink} from "react-router-dom"
import LoadingSpinner from '../../Plugin/LoadingSpinner';
class FollowPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listAccount: null,
            isLoading: true,
        }
    }
    
    
    componentWillMount() { 
        var listAccount = this.props.fireStore.Account;
        console.log(listAccount);
        
        this.setState({ 
            listAccount: listAccount,
            isLoading:false,
        })
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    fetchListAccountFromFirestore ( ) {
        var listAccount = this.props.fireStore.Account;
        if (listAccount) { 
            this.setState({
                isLoading:false,
                listAccount: listAccount,
            })
        }
    }

    suggestFriend2Following(listAccount, followed) { 
        var suggestList = new Array()
        var lengthListAccount = listAccount.length
        // for (var i = 0; i< 10;) { 
        //     var random = this.getRandomInt(1, lengthListAccount)
        //     if ( listAccount[random] ===)
        // }
    }

    render() {
        
        if ( this.state.isLoading ) {
            this.fetchListAccountFromFirestore() 
            return(<div><LoadingSpinner/></div>)
        }

        else {
            return (
                <Row>
                    <Col xs={6} md={3}>
                    {/* <LeftBar userProfile = {userProfile}/> */}
                    </Col>
                    <Col xs={6} md={9}>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>
                                            <big>FOLLOWING</big>
                                            <br/>
                                            <NavLink to={"/following/" }>4</NavLink>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="card-group">
                            {/* <Row>
                                {userProfile.following.map ( each => {
                                return (
                                    <Col xs = {6} md = {4}> 
                                        <FollowingCard following = {each}/>
                                    </Col>
                                    )
                                })}
                            </Row> */}
                        </div>
                    </Col>
                </Row>
            )
        }
    }
}



const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        fireStore: state.firestore.ordered,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Account'},
    ])
)(FollowPage);