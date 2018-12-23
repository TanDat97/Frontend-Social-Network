import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'

import {updateAuthProfile} from '../../../Store/Actions/authActions'
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
import LoadingSpinner from '../../../Plugin/LoadingSpinner';
import Axios from 'axios';
class AboutProfile extends Component{
    constructor(props) {
        super(props);
        
        var authKey = localStorage.getItem("authKey");
        authKey = JSON.parse(authKey)

        var authProfile = localStorage.getItem("authProfile");
        authProfile = JSON.parse(authProfile)

        this.state = {
            authProfile: authProfile? authProfile:null,
            authKey: authKey? authKey:null,
            isLoading: true,
        }
    }
    
    handleChangeImage =  (e) => {
        console.log("Uploading");
        document.getElementById("upload_status").innerText = "Loading..."
        var reader = new FileReader();
        var file = e.target.files[0];
        if(file)
        {
          if(file.size <= 20480)
          {
                reader.readAsDataURL(file);   
                reader.onload = (upload) =>{
                    this.setState({
                        avatar: upload.target.result
                    });
                };
                
            setTimeout(() =>  {
                console.log(this.state.avatar);
                document.getElementById("upload_status").innerText = ""
                alert("Upload thành công")
                
            }, 1000);
          }
          else{
            setTimeout(() =>  {
                this.setState({
                    avatar: this.state.avatar
                })
                document.getElementById("upload_status").innerText = "Upload Fail!!!!!!"
                alert("Image có dung lượng lớn hơn 20KB!!!")
                
            }, 1000);
          }
        }
        else {
            this.setState({
                avatar: this.state.avatar
            })
            document.getElementById("upload_status").innerText = ""
        }
       
    }



    handleSubmit = (e) =>  {
        e.preventDefault();
        var privateKey = document.getElementById("privateKey").value;
        console.log(privateKey);
        
    }

    
    
    render(){
        var authProfile = this.state.authProfile

        if ( authProfile) {
        return (

            <div className = "card">    
                <div className = "card-body bg-white">
                <Form horizontal onSubmit= {this.handleSubmit.bind(this)}>
    
                    <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} md = {2}>
                        UserName
                        </Col>
                        <Col sm={10} >
                        <input className = 'form-control' type="text" id = "displayName" value = {authProfile.displayName} />
                        </Col>
                    </FormGroup>
        
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} md={2}>
                        Public Key
                        </Col>
                        <Col sm={10}>
                        <input className = "form-control" type="text" value = {authProfile.publicKey} id = "publicKey" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} md={2}>
                        Private Key
                        </Col>
                        <Col sm={10}>
                        <input className = "form-control" type="text" id = "privateKey"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                        <input ref="file" type="file" name="file" 
                              className="upload-file" 
                              id="file"
                              onChange={this.handleChangeImage}
                              encType="multipart/form-data" 
                              />                       
                         <label id = "upload_status"></label>
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
        else { 
            return (<div><LoadingSpinner/></div>)
        }
    }
}




const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        //firebase: state.firebase,
        fireStore: state.firestore.ordered
    };
}
const mapDispatchToProps = (dispatch) => { 
    return { 
        updateAuthProfile: (Profile, user)=> dispatch(updateAuthProfile(Profile,user))
      
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
      
    ])
)(AboutProfile);

