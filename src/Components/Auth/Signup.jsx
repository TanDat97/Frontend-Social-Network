import React, { Component } from 'react';
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import {signUp,createUser} from '../../Store/Actions/authActions'
import {Keypair, StrKey} from "stellar-base"
import Axios from 'axios';
import {encodeAndCommitTX} from "../../Store/Actions/transactionActions"
import * as handleTransaction from "../../Function/HandleTransaction"
class Signup extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            email: '',
            password:'',
            password2: '',
            firstName: '',
            lastName: '',   
            publicKey: null,
            privateKey: null,
        }
    }
    
    handleChange = (e) =>  {
        this.setState({
            [e.target.id] : e.target.value
        })
        
    }
    handleCreateKey = (e)=>{
        const key = Keypair.random();
        const privateKey = key.secret();
        const publicKey = key.publicKey();
        this.setState( {
            privateKey: privateKey,
            publicKey: publicKey,
        })
        
    }

    handleSubmit = (e) =>  {
        e.preventDefault();
        var authPrivateKey = document.getElementById("authPrivateKey").value
        var newPublicKey = document.getElementById("newPublicKey").value
        
        
        if (StrKey.isValidEd25519SecretSeed(authPrivateKey) ) {
            var contentTx = {
                type: "create_account",
                newPublicKey: newPublicKey,
            }
            this.props.encodeAndCommitTX(contentTx, authPrivateKey,null);
        }
        else 
            alert("Invalid private key!")

     }

    render() {
        return (
            <div className = "container container"> 
                <br/>
                <form  className = "white"> 
                    <h2><strong>Sign Up </strong> </h2>
                    
                    <div className = "input-field">
                        <label htmlFor = "text">Public Key</label>
                        <input type ="text" className="form-control" value= {this.state.publicKey?this.state.publicKey:null} id = "newPublicKey" disabled/>

                        <label htmlFor = "text">Private Key</label>
                        <input type ="text" className="form-control" value= {this.state.privateKey} id = "newPrivateKey" disabled/>
                        <br/>
                        <button onClick= {this.handleCreateKey} className="btn btn-sm btn-primary">Create Private Key</button>
                    </div>
                  
                    <br/>

                    <div className = "input-field">
                        <label htmlFor = "text">Your Private key (required)</label>
                        <input type ="text" className="form-control" id = "authPrivateKey" onChange= {this.handleChange}required/>
                    </div>
                    
                     <br/>
                        <button onClick = {this.handleSubmit} type = "submit" className="btn btn-primary pull-right">Create</button>
                    
                </form>
                <br/>
            </div>
        );
    }
}

const  mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
       
        fireStore: state.firestore.ordered
        
    };
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        signUp: (user) => dispatch(signUp(user)),
        createUser: (user) => dispatch(createUser(user)),
        encodeAndCommitTX: (contentTx, privateKey, address) => dispatch(encodeAndCommitTX (contentTx, privateKey, address)),
    }
}


export default connect(
    mapStateToProps,mapDispatchToProps
)(Signup);
