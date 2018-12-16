import {combineReducers} from 'redux'

//Actions
import followerReducer from "./followerReducer"

import postReducer from "./postReducer"
import authReducer from "./authReducer"
import followingReducer from './followingReducer'
import {firebaseReducer} from 'react-redux-firebase'
//
import { firestoreReducer} from 'redux-firestore'


const rootReducer = combineReducers( { 
    post: postReducer,
    auth: authReducer,

    follower: followerReducer,
    following: followingReducer,   
    
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default  rootReducer