import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'
import {encodeAndCommitTX} from "../../../Store/Actions/transactionActions"
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
            isUploaded: false,
            avatar: "data:image/png;base64,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"
        }
    }
    
    handleChangeImage =  (e) => {
        document.getElementById("upload_status").innerText = "Loading..."
        document.getElementById("upload_status").className = "text-info"
        var reader = new FileReader();
        var file = e.target.files[0];
        if(file)
        {
          if(file.size <= 20480)
          {
                reader.readAsDataURL(file);   
                reader.onload = (upload) =>{
                    console.log( upload.target.result);
                    
                    this.setState({
                        avatar: upload.target.result,
                        isUploaded:true,
                    });
                };
                
            setTimeout(() =>  {
                console.log(this.state.avatar);
                document.getElementById("upload_status").innerText = ""
                document.getElementById("uploaded_image").src = this.state.avatar
            }, 1000);
          }
          else{
            setTimeout(() =>  {
                this.setState({
                    avatar: this.state.avatar,
                    isUploaded:false,
                })
                document.getElementById("upload_status").innerText = "Upload Fail!!!!!!"
                document.getElementById("upload_status").className = "text-danger"
                document.getElementById("uploaded_image").src = ""
                
                alert("Image có dung lượng lớn hơn 20KB!!!")
                
            }, 1000);
          }
        }
        else {
            this.setState({
                avatar: this.state.avatar,
                isUploaded: true,
            })
            document.getElementById("upload_status").innerText = ""
            document.getElementById("uploaded_image").src = this.state.avatar
        }
       
    }



    handleSubmit = (e) =>  {
        e.preventDefault();
        
        var displayName = document.getElementById("displayName").value;

        
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
                    <br/>
                        <img src = "/default_avatar" id = "uploaded_image" hidden = {!this.state.isUploaded}/>
                    <br/>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                        <input ref="file" type="file" name="file" 
                              className="upload-file" 
                              id="file"
                              onChange={this.handleChangeImage}
                              encType="multipart/form-data" 
                              />       
                              <br/>
                         <label id = "upload_status" className = ""></label>
                        </Col>
                    
                        <Col smOffset={2} sm={10}>
                        <input type="submit" className= "float-right btn btn-primary" value = "Update" />
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
        updateAuthProfile: (Profile, user)=> dispatch(updateAuthProfile(Profile,user)),
        encodeAndCommitTX: (contentTx, privateKey, address) => dispatch(encodeAndCommitTX (contentTx, privateKey, address)),
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props) => [
        {collection: 'Profile'},
      
    ])
)(AboutProfile);

