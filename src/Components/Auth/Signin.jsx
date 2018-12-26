import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signIn, signInWithGoogle} from  '../../Store/Actions/authActions'
import {Row, Col} from "react-bootstrap"
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import {Keypair,StrKey} from "stellar-base"

import Axios from 'axios';
class Signin extends Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            privateKey: null,
            login: false,
        }
    }

    handleChange = (e) =>  {
        this.setState({
            [e.target.id] : e.target.value
        })
      
    }


    handleSubmit = (e) =>  {
        e.preventDefault();
        var privateKey = this.state.privateKey

        if (StrKey.isValidEd25519SecretSeed(privateKey) ) {
            var key = Keypair.fromSecret(privateKey);
            var publicKey = key.publicKey()
            
            Axios.post ( "/signin/", {
                username: publicKey,
                password: "1",
            }).then(response => {
                var data = response.data
                if ( data.error) { 
                    alert(data.error)
                }
                else { 
                    alert(data.message);
                    var authKey = {
                        publicKey: publicKey,
                        privateKey: this.state.privateKey,
                    }
                    this.props.signIn(authKey)
                    
                    window.location.replace("/profile/" + publicKey)
                }
                
            }).catch(err => { 
                console.log(err);
            })
        }
        else 
            alert("Invalid private key!")
        

    }
       
    
    render() {
        var authError = this.props.authError
    
        
        return (
            <div className="rounded shadow bg-light container">
            <br/>
               <Row>   
                    <Col xs = {6} md = {8}>
                    <h2><strong>Sign In </strong> </h2>
                    <form onSubmit =  {this.handleSubmit}>
                    <div class="form-group"> 
                        <label htmlFor="exampleInputEmail1">Private Key</label>
                        <input type="text" class="form-control" id="privateKey" aria-describedby="emailHelp" placeholder="Enter private key here..." onChange= {this.handleChange} required/>
                    </div>
                   
                    
           
                    <br/>
                        <button type="submit" class="btn btn-primary blue">Login</button>
                    
                    
                    </form>
                    </Col>

               </Row>
            <br/>
			</div>

        );
    }
}

const mapStateToProps = (state) => { 
    console.log(state)
    return { 
        auth: state.firebase.auth,
        fireStore: state.firestore.ordered
    }
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        signIn: (authKey) => dispatch(signIn(authKey)),

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
      
)(Signin);