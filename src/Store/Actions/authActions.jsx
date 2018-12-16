import * as AT from "./ActionTypes"


export const signUp = (authUser) => { 
    return (dispatch , getState, {getFirebase, getFirestore}) => { 
        const firebase = getFirebase() 
        const firestore = getFirestore()
        console.log(99992321412);
       

        var user = authUser
        console.log(authUser);
        console.log(21312739);
        
        firebase.auth().createUserWithEmailAndPassword(
            authUser.email,
            authUser.password,
        ).then((response)=>{

            const displayName = authUser.firstName + " " + authUser.lastName
           console.log(displayName);
           
            
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
            })
        })
        .then(() => { 
        dispatch({
            type: "SIGNUP_SUCCESS"})
        })

        .catch((err)=> { 
            console.log(err);
            
            dispatch({ 
                type: "SIGNUP_ERROR",
                err:err,
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
                    err:err,
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
                    err: err,
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
       
        phoneNumber: Profile.phoneNumber,
    }).then( () =>  { 
        dispatch({
            type: AT.Update_Auth_Profile_Success,
        });
    }).catch((err) => {
        dispatch({
            type: AT.Update_Auth_Profile_Error,
            err: err,
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
                    err: err,
                });
            })
        }
    }




    
