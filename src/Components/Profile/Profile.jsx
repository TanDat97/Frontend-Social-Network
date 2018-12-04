import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,MenuItem} from 'react-bootstrap'

class Profile extends Component{
    handleChange = (e) =>  {
        this.setState({
            [e.target.id] : e.target.value
        })
        
    }

    handleSubmit = (e) =>  {
        e.preventDefault();
        
    }
    
    render(){
        var auth = this.props.auth
        return (
            <div className="panel rounded shadow bg-white">
                <div className = "card-body bg-white">
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalText">        
                            <Col componentClass={ControlLabel} md = {2}>
                            First Name
                            </Col>
                            <Col sm={10} >
                            <FormControl type="text" value = {auth.firstName}/>
                            </Col>
                        </FormGroup>
        
                        <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} sm={2}>
                            Last Name
                            </Col>
                            <Col sm={10}>
                            <FormControl type="text" value = {auth.lastName} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} sm={2}>
                                Giới tính
                            </Col>
                            <DropdownButton
                                bsSize="large"
                                title= {auth.gender}
                                id="dropdown-size-large">
                                <MenuItem eventKey="1">Name</MenuItem>
                                <MenuItem eventKey="2">Nữ</MenuItem>
                            </DropdownButton>
                        </FormGroup> 

                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                            Email
                            </Col>
                            <Col sm={10}>
                            <FormControl type="email" value = {auth.email}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalNumber">
                            <Col componentClass={ControlLabel} sm={2}>
                            Phone
                            </Col>
                            <Col sm={10}>
                            <FormControl type="number" value = {auth.phone}/>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                            <Button type="submit" className= "float-right btn btn-primary">Submit</Button>
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

