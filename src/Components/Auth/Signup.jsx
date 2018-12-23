import React, { Component } from 'react';
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import {signUp,createUser} from '../../Store/Actions/authActions'
import {Keypair, StrKey} from "stellar-base"
import Axios from 'axios';
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
            var key = Keypair.fromSecret(authPrivateKey);
            var authPublicKey = key.publicKey()
            console.log(authPublicKey);
            
            var getAccount = "/account/"
            Axios.post(getAccount, { 
                public_key: authPublicKey
            }).then(response => { 
                var data = response.data
                if ( data.error) { 
                    alert(data.error)
                    this.props.history.push(data.redirect)
                }
                else {
                    var sequence = data.sequence + 0
                    console.log(sequence);
                    
                    var createEncode = handleTransaction.encodeCreateAccountTransaction(authPublicKey,newPublicKey,authPrivateKey,sequence)
                    console.log(createEncode);
                    Axios.post("/broadcast_commit",{
                        enCodeTransaction: createEncode,
                    }).then(response => {
                        alert(response.data.message)
                        window.location.reload();
                    }).catch(err=> { 
                        alert(err)
                    })
                }
            })
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
                        <button onClick = {this.handleSubmit} type = "submit" className="btn btn-primary blue pull-right">Login</button>
                    
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
    }
}

export default compose(
 connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
    
    ]) ,  
)(Signup);