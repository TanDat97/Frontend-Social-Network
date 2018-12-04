import {combineReducers} from 'redux'

//Actions
import followerReducer from "./followerReducer"
import postReducer from "./postReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers( { 
    post: postReducer,
    follower: followerReducer,
    auth: authReducer,
})

export default  rootReducer