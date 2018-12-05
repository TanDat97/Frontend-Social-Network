import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
        firstName: props.auth.firstName,
        lastName: props.auth.lastName,
        email: props.auth.email,
        phone: props.auth.phone,
        }
    }
    handleChange = (e) =>  {
        this.setState({
            [e.target.id]: e.target.value,
        })
     console.log(this.state.firstName)
     console.log(this.state.lastName)
    }

    handleSubmit = (e) =>  {
        e.preventDefault();

        console.log(this.state.value)
        
    }
    
    render(){
        var auth = this.props.auth
        return (

            <div class="panel rounded shadow bg-white">
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
                    Giới tính
                        </Col>
                    
                
            
                    
                                <DropdownButton
                                bsSize="large"
                                title= {auth.gender}
                                >
                                <MenuItem value = "Nam">Nam</MenuItem>
                                <MenuItem value="Nữ">Nữ</MenuItem>
                            
                
                                </DropdownButton>
                        
                    
                    

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
)(Profile);

