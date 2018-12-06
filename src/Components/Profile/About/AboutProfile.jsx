import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'

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
    handleChange = (e) =>  {
        this.setState({
            [e.target.id]: e.target.value,
        })
        console.log(this.state.gender)
     
    }

    handleSubmit = (e) =>  {
        e.preventDefault();

        console.log(this.state.value)
        
    }
    
    render(){
        var auth = this.props.auth
        return (

            <div className = "card">    
                <div className = "card-body bg-white">
                <Form horizontal>
                
                
    
                <FormGroup controlId="formHorizontalText">
                
                    
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
                        <Button type="submit" onSubmit= {this.handleSubmit.bind(this)} className= "float-right btn btn-primary">Submit</Button>
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
    };
}


export default connect(
    mapStateToProps,
)(AboutProfile);

