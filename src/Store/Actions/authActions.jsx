import * as AT from "./ActionTypes"
import firebase from '../../Config/firebaseConfig'



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

export const updateAuthProfile = (Profile) => { 
    return (dispatch , getState,{getFirebase,getFirestore}) => { 
      console.log(Profile)
        const firestore = getFirestore()
  console.log(getState);
  
   firestore.collection("Profile").doc("YL5oPZWpoOG9jAhEfHmu").update({
         ...Profile,
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

    // const db = firebase.firestore();

    // db.collection("Profile").doc("YL5oPZWpoOG9jAhEfHmu").update({
    // ...Profile,
    // });  


    
}