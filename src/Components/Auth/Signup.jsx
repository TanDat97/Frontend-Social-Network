import React, { Component } from 'react';
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import {signUp,createUser} from '../../Store/Actions/authActions'
import {Keypair} from "stellar-base"

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
        const listUser = this.props.fireStore.Profile
  
        if (this.state.password.length >= 6) {
        if (this.state.password === this.state.password2) {
            var isEmailExisted = listUser.find( each => each.email === this.state.email)
            if(isEmailExisted) {
                alert("Email đã tồn tại")
            }
            else {
                this.props.signUp(this.state)
                this.props.history.replace('/')
            }
            
        }
        else {
            alert("Vui lòng nhập lại password")
        }
        }
        else {
            alert("Mật khẩu ít hơn 6 kí tự")
        }

     }

    render() {
        return (
            <div className = "container"> 
                <br/>
                <form onSubmit = {this.handleSubmit} className = "white"> 
                    <h2><strong>Sign Up </strong> </h2>
                    
                    <div className = "form-group">
                        <label htmlFor = "text">FirstName</label>
                        <input type ="text" class="form-control" id = "firstName" onChange= {this.handleChange} required/>
                    </div>

                    <div className = "input-field">
                        <label htmlFor = "text">LastName</label>
                        <input type ="text" class="form-control" id = "lastName" onChange= {this.handleChange} required/>
                    </div>
                   
                    <div className = "input-field">
                        <label htmlFor = "text">Public Key</label>
                        
                        <input type ="text" class="form-control" value= {this.state.publicKey?this.state.publicKey:null} id = "publicKey" onChange= {this.handleChange} required/>

                        <label htmlFor = "text">Private Key</label>
                        <input type ="text" class="form-control" value= {this.state.privateKey} id = "privateKey" disabled/>
                        <button onClick= {this.handleCreateKey} class="btn btn-primary">Create Private Key</button>
                    </div>
                  
                   

                    <div className = "input-field">
                        <label htmlFor = "email">Email</label>
                        <input type ="email" class="form-control" id = "email" onChange= {this.handleChange}required/>
                    </div>
                    
                    <div className = "input-field">
                        <label htmlFor = "password">Password</label>
                        <input type ="password" class="form-control" id = "password" onChange= {this.handleChange}required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "password">Confirm Password</label>
                        <input type ="password" class="form-control" id = "password2" onChange= {this.handleChange}  required/>
                    </div>
                     <br/>
                        <button type="submit" class="btn btn-primary blue">Login</button>
                    
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