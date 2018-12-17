import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signIn, signInWithGoogle} from  '../../Store/Actions/authActions'
import {Row, Col} from "react-bootstrap"
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';

import GoogleButton from 'react-google-button'
import  {withRouter} from 'react-router-dom'
class Signin extends Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            email: '',
            password:'',
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
      
        const listUser = this.props.fireStore.Profile
     
        var emailLogin = listUser.find( each => each.email === this.state.email && each.password === this.state.password)
    
        if( emailLogin) {
            this.props.signIn(this.state)
            this.props.history.replace('/')
        }
        else {
            alert("Sai tài khoản hoặc mật khẩu")
        }  
      
    }
       
    
    render() {
        var authError = this.props.authError
    
        
        return (
            <div className = "container">
            <br/>
               <Row>   
                    <Col xs = {6} md = {8}>
                    <h2><strong>Sign In </strong> </h2>
                    <form onSubmit =  {this.handleSubmit}>
                    <div class="form-group"> 
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange= {this.handleChange} required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange= {this.handleChange} required/>
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
        signIn: (creds) => dispatch(signIn(creds)),

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
    
    ]) ,  
)(Signin);