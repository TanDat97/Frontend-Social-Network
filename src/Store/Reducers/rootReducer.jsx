import {combineReducers} from 'redux'

//Actions
import followerReducer from "./followerReducer"
import postReducer from "./postReducer"
import authReducer from "./authReducer"
import followingReducer from './followingReducer'

const rootReducer = combineReducers( { 
    post: postReducer,
    follower: followerReducer,
    auth: authReducer,
    following: followingReducer,    
})

export default  rootReducer