import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import SigninLink from './Link/SigninLink'
import SignoutLink from './Link/SignoutLink'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { getFirestore} from 'redux-firestore'
import firebase from "../../../../Config/firebaseConfig"
import LoadingSpinner from "../../../../Plugin/LoadingSpinner"
import Axios from 'axios';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    var authKey = localStorage.getItem("authKey");
    authKey =JSON.parse(authKey)
    this.state = {
      authProfile:null,
      authKey: authKey,
    }        
    this.handleSearchUser = this.handleSearchUser.bind(this)
  }

  
componentWillMount() { 

    console.log(this.state.authKey);
    var getAccount = "/account/"
    if ( this.state.authKey){
      Axios.post(getAccount, {
          public_key: this.state.authKey.publicKey,
      })
      .then((response) => {
          var data = response.data
          if ( data.error)  {
              this.props.history.push(data.redirect)
              localStorage.removeItem("authKey");
              localStorage.removeItem("authProfile");

          }
          else {
              var authProfile = {}
              localStorage.removeItem("authProfile") 

              authProfile.amount = data.amount;            
              authProfile.displayName = data.displayName? data.displayName : "Account";
              authProfile["followings"] = data.followings ? data.followings: new Object({ addresses: new Array()})
              authProfile["post"] = data.post? data.post : new Array()
              authProfile["avatar"] = data.picture? "data:image/jpg;base64, " + data.picture : null
              
              authProfile["publicKey"] = this.state.authKey.publicKey
              authProfile["privateKey"] = this.state.authKey.privateKey
              
              localStorage.setItem("authProfile",JSON.stringify(authProfile))
           
              this.setState({ 
                  isLoading: false,
                  authProfile: authProfile,
              })  
          }
      })
      .catch( (error) => {
          console.log(error);
      });
    }
  }

  handleSignOut() {
    Axios.get("/signout").then((response) => { 
        console.log(response.data);
        var data = response.data;
        
        localStorage.clear()
        alert(data.message + localStorage.length);
        
         
        window.location.replace(data.redirect);
       
    })
  }

  handleSearchUser(target) { 
    console.log(123)
    
    
    var searchValue = document.getElementById("search").value 
    
    if ( searchValue) {
      var firstChar = searchValue.charAt(0)
      if ( firstChar === "G") {
        var db = firebase.firestore()
        db.collection('Account').doc(searchValue).get().then(snapshot => { 
            var account = snapshot.data()
            if ( account ) { 
                this.props.history.push("/profile/" + searchValue)
            }
            else { 
              alert("Tài khoản không tồn tại")
            }
        })
      } 
      else {
          var db = firebase.firestore()
          db.collection('Post').doc(searchValue).get().then(snapshot => { 
          var post = snapshot.data()
          if ( post ) { 
              post = JSON.parse(post.post)
              this.props.history.push("/profile/" + post.account)
          }
          else { 
            alert("Tài khoản không tồn tại")
          }
      })
      }
      
    }
    else { 
      alert("Invalid Public key!!")
    }

   

  }

  render() {
    const links = this.state.authProfile ? <SigninLink authProfile = {this.state.authProfile} handleSignOut = {this.handleSignOut.bind(this)}/> : <SignoutLink/>
    
    console.log(this.state.authProfile);
    
      return (
       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
          <div className = "container">
            <a className="navbar-brand mb-0 h1" href="/">Forest</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <form className="form-inline my-2 my-lg-0" >
             
                <input id = "search" type="text" className="form-control mr-sm-2" placeholder="Search..."/>
                <button class="btn btn-outline-info my-2 my-sm-0" type="button" onClick = {this.handleSearchUser}>Go</button>
              </form>
              <ul className="navbar-nav mr-auto "></ul>
              {links}
            </div>
        
          </div>
  
        </nav>
   
      )

  }
}

const mapStateToProps = (state) => { 
  
  return { 
      auth: state.firebase.auth,
  }
}
const mapDispatchToProps = (dispatch) => { 
  
  return { 
      
  }
}

export default withRouter(compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HeaderBar))
