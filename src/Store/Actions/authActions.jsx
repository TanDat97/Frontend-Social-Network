import * as AT from "./ActionTypes"



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
   firestore.collection("Profile").doc(user.uid.toString()).update({
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

export const createUser = (Profile) => {
    
        return (dispatch,getState, {getFirebase, getFirestore}) => { 
            const firestore = getFirestore();
            firestore.collection('Profile').doc(Profile.uid).set({                    
                ...Profile,
               
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




    
