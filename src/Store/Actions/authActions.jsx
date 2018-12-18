import * as AT from "./ActionTypes"
import axios from "axios"

export const signUp = (authUser) => { 
    return (dispatch , getState, {getFirebase, getFirestore}) => { 
        const firebase = getFirebase() 
        const firestore = getFirestore()
        console.log(99992321412);
       

        
        console.log(authUser);
        console.log(21312739);
        
        firebase.auth().createUserWithEmailAndPassword(
            authUser.email,
            authUser.password,
        ).then((response)=>{

            const displayName = authUser.firstName + " " + authUser.lastName
            var createAccountReq = "/create_account/?public_key=" + authUser.publicKey

            axios.post(createAccountReq)
            .then( response => {
                console.log("Send create_account REQ Success");
                
                firestore.collection('Profile').doc(authUser.email).set({                    
                    email: authUser.email ,
                    password:authUser.password,
                    firstName: authUser.firstName,
                    lastName: authUser.lastName,
                    displayName: displayName,
                    publicKey: authUser.publicKey,
                    gender: null,
                    phoneNumber: null,
                    avatar: null,
                    follower:[],
                    following:[],
                    friends:[],
                })
            })
            
           
        })
        .then(() => { 
        dispatch({
            type: "SIGNUP_SUCCESS"
        })
        })
        .catch((err)=> { 
            console.log(err);
            
            dispatch({ 
                type: "SIGNUP_ERROR",
                error:err,
            })
        })

    }
}
export const signIn = (credentials) => { 
    return (dispatch , getState, {getFirebase}) => { 
        const firebase = getFirebase() ;
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(() => 
            { 
            dispatch({
                type: AT.LOGIN_SUCCESS})
            }).catch((err)=> 
            { 
                dispatch({ 
                    type: AT.LOGIN_ERROR,
                    error:err,
            })
        })
    }
}

export const signInWithGoogle = (credentials) => { 
    return (dispatch, getState, {getFirebase}) => { 
        const firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(
            provider
        ).then(() => 
            { 
            dispatch({
                type: AT.LOGIN_GOOGLE_SUCCESS})
            }).catch((err)=> 
            { 
                dispatch({ 
                    type: AT.LOGIN_GOOGLE_ERROR,
                    error:err,
            })
        })  
        
    }
}

export const signOut = () => { 
    return (dispatch, getState, {getFirebase}) => { 
        const firebase = getFirebase();

        firebase.auth().signOut().then( () => {
            dispatch({
                type: AT.SIGN_OUT_SUCCESS
            })
        })
    }
}

export const updateAuthProfile = (Profile,user) => { 
    return (dispatch , getState,{getFirebase,getFirestore}) => { 
      console.log(Profile)
        const firestore = getFirestore()
  
  console.log(user.uid)
   firestore.collection("Profile").doc(user.email).update({
         displayName: Profile.displayName,
         email: Profile.email,
        avatar: Profile.avatar,
        phoneNumber: Profile.phoneNumber,
    }).then( () =>  { 
        alert("Bạn đã cập nhật thông tin cá nhân")
        
        dispatch({
            type: AT.Update_Auth_Profile_Success,
        });

        window.location.reload()
    }).catch((err) => {
        alert(err)
        dispatch({
            type: AT.Update_Auth_Profile_Error,
            error:err,
        });
    })
    }

}

export const createUser = (user) => {   
    
        return (dispatch,getState, {getFirebase, getFirestore}) => { 
            const firestore = getFirestore();
            const displayName = user.firstName + " " + user.lastName
            firestore.collection('Profile').doc(user.email).set({                    
                email: user.email ,
                password:user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: displayName,
                publicKey: user.publicKey,
                gender: null,
                phoneNumber: null,
                follower:[],
                following:[],
                friends:[],
            }).then( () =>  { 
                dispatch({
                    type: "CREATE_USER",
                });
            }).catch((err) => {
                dispatch({
                    type: "CREATE_USER_ERROR",
                    error:err,
                });
            })
        }
    }




    
