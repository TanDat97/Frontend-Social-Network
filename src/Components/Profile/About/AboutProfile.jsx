import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropdownButton,Form,FormGroup,Col,Button,ControlLabel,FormControl,ButtonToolbar,Dropdown,Glyphicon,MenuItem} from 'react-bootstrap'

import {updateAuthProfile} from '../../../Store/Actions/authActions'
import { compose } from 'redux'
import { isEmpty, firestoreConnect } from 'react-redux-firebase';
class AboutProfile extends Component{
    constructor(props) {
        super(props);
  
        this.state = {
            displayName: "",
            email: "",
            gender: "",
            phoneNumber:"",
            publicKey: "",
            avatar: "",
            authUser:[],
        }
    }
    componentDidMount(){
        
        var listProfile = this.props.fireStore.Profile
        var auth = this.props.auth
        var userLog
        listProfile.map(each=>{
            if(each.email == auth.email)
            {
                userLog = each
             
            }
        })
     
            this.setState({
                displayName: userLog.displayName,
                 email: userLog.email,
                 gender: userLog.gender,
                 phoneNumber: userLog.phoneNumber,
                 avatar: userLog.avatar,
                 authUser: userLog,
             });
        
     
     
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

    handleChange = (e) =>  {
     
   
            this.setState({
          
                [e.target.id]: e.target.value,
            })
         
         
        
    }

    handleSubmit = (e) =>  {
        e.preventDefault();
     
        var auth = this.props.auth // auth firebase
       
         if(auth)
         {
            var Profile  = {
                displayName: this.state.displayName,
               email: this.state.email,
               gender: this.state.gender,
               phoneNumber: this.state.phoneNumber,
               avatar: this.state.avatar,
            }
            this.props.updateAuthProfile(Profile, auth)
        
         }
    }
    
    render(){
            console.log(this.state.authUser)
       
        return (

            <div className = "card">    
                <div className = "card-body bg-white">
                <Form horizontal onSubmit= {this.handleSubmit}>
                
                
    
                <FormGroup controlId="formHorizontalText" onSubmit= {this.handleSubmit.bind(this)} >
                
                    
                        <Col componentClass={ControlLabel} md = {2}>
                        UserName
                        </Col>
                        <Col sm={10} >
                        <input className = 'form-control' type="text" id = "displayName" value = {this.state.displayName}   onChange = {this.handleChange.bind(this)}/>
                        </Col>
                    
                    </FormGroup>
        
                    
                  

                    <FormGroup controlId="formHorizontalText">
                
                <Col componentClass={ControlLabel} md={2}>
                    Gender
                        </Col>
                   <Col sm = {2}>
                   <div>
                        <select id="gender" onChange={this.handleChange.bind(this)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                           
                        </select>
                        <p></p>
                       
                    </div>
                        </Col>
                    </FormGroup> 
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} md={2}>
                        Email
                        </Col>
                        <Col sm={10}>
                        <input className = "form-control" type="email" value = {this.state.email} id = "email" onChange = {this.handleChange.bind(this)} disabled/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalNumber">
                        <Col componentClass={ControlLabel} md={2}>
                        Phone
                        </Col>
                        <Col sm={10}>
                        <input className = "form-control" type="text" value = {this.state.phoneNumber} id = "phoneNumber" onChange = {this.handleChange.bind(this)}/>
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

