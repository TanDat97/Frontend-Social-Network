import {combineReducers} from 'redux'

//Actions
import followerReducer from "./followerReducer"

import postReducer from "./postReducer"
import authReducer from "./authReducer"
import followingReducer from './followingReducer'
import {firebaseReducer} from 'react-redux-firebase'
//
import getAccountReducer from "./getAccountReducer"
import { firestoreReducer} from 'redux-firestore'
import transactionReducer from "./transactionReducer"


const rootReducer = combineReducers( { 
    post: postReducer,
    authKey: authReducer,
    getAccount: getAccountReducer,
    follower: followerReducer,
    following: followingReducer,
    transactionActions: transactionReducer,
    
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default  rootReducer