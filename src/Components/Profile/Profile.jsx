import React, { Component } from 'react';

import {Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'

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

    return (

        <div class="panel rounded shadow">

            <Form horizontal>
            
            <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                    First Name
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" value = "Nguyễn"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                    Last Name
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" value = "Thanh Đại" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
               < ButtonToolbar>
               <Col componentClass={ControlLabel} sm={2}>
                   Giới tính
                    </Col>
                    <Col  sm={10}>
                    <Dropdown id="dropdown-custom-1">
                        <Dropdown.Toggle>
                        Nam
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                        <MenuItem eventKey="1">Nam</MenuItem>
                        <MenuItem eventKey="2">Nữ</MenuItem>
                       
                       
                       
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                 </ ButtonToolbar>  

                 </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={10}>
                    <FormControl type="email" value = "nguyenthanhdai97@gmail.com" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                    Your Job
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" value = "Student"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalNumber">
                    <Col componentClass={ControlLabel} sm={2}>
                    Phone
                    </Col>
                    <Col sm={10}>
                    <FormControl type="number" value = "0972002914"/>
                    </Col>
                </FormGroup>
                
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </FormGroup>
                </Form> 
        </div> 

    )
}

}
export default Profile