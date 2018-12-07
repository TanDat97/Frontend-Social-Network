import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'
import firebase from '../../../Config/firebaseConfig'
class AboutProfile extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
        firstName: props.auth.firstName,
        lastName: props.auth.lastName,
        email: props.auth.email,
        gender: props.auth.gender,
        phone: props.auth.phone,
        }
    }
    componentDidMount(){
        const ref = firebase.firestore().collection('Profile').doc('YL5oPZWpoOG9jAhEfHmu');
        ref.get().then((doc) => {
          if (doc.exists) {
            const board = doc.data();
            this.setState({
                firstName: board.firstName,
                lastName: board.lastName,
                email: board.email,
                gender: board.gender,
                phone: board.phone,
            });
          } else {
            console.log("No such document!");
          }
        });
    }
    
    handleChange = (e) =>  {
        this.setState({
            [e.target.id]: e.target.value,
        })
 
     
    }

    handleSubmit = (e) =>  {
        
      
        alert("Bạn đã cập nhật thông tin cá nhân")
        e.preventDefault();
        console.log(this.state.gender)  
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        }); 
        db.collection("Profile").doc("YL5oPZWpoOG9jAhEfHmu").update({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
    
            gender: this.state.gender,
            phone: this.state.phone,
        });  
    
 
        
    }
    
    render(){

        return (

            <div className = "card">    
                <div className = "card-body bg-white">
                <Form horizontal onSubmit= {this.handleSubmit}>
                
                
    
                <FormGroup controlId="formHorizontalText" onSubmit= {this.handleSubmit.bind(this)} >
                
                    
                        <Col componentClass={ControlLabel} md = {2}>
                        First Name
                        </Col>
                        <Col sm={10} >
                        <input className = 'form-control' type="text" id = "firstName" value = {this.state.firstName}   onChange = {this.handleChange.bind(this)}/>
                        </Col>
                    
                    </FormGroup>
        
                    
                    <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2}>
                        Last Name
                        </Col>
                        <Col sm={10}>
                        <input className="form-control" type="text" value= {this.state.lastName} id = "lastName" onChange = {this.handleChange.bind(this)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalText">
                
                <Col componentClass={ControlLabel} sm={2}>
                    Gender
                        </Col>
                   <Col sm = {2}>
                   <div>
                        <select id="gender" onChange={this.handleChange.bind(this)} value={this.state.value}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                           
                        </select>
                        <p></p>
                        <p>{this.state.value}</p>
                    </div>
                        </Col>
                    </FormGroup> 
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                        Email
                        </Col>
                        <Col sm={10}>
                        <input className = "form-control" type="email" value = {this.state.email} id = "email"onChange = {this.handleChange.bind(this)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalNumber">
                        <Col componentClass={ControlLabel} sm={2}>
                        Phone
                        </Col>
                        <Col sm={10}>
                        <input className = "form-control" type="number" value = {this.state.phone} id = "phone" onChange = {this.handleChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                        <input type="submit" className= "float-right btn btn-primary" value = "Submit" />
                        </Col>
                    </FormGroup>
                    </Form> 
                    </div>
                    <br/>
            </div> 

        )
    }
}




const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        firebase: state.firebase,
        firestore: state.firestore
    };
}


export default connect(
    mapStateToProps,
)(AboutProfile);

