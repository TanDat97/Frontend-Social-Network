import {combineReducers} from 'redux'

//Actions
import followerReducer from "./followerReducer"
import postReducer from "./postReducer"


const rootReducer = combineReducers( { 
    post: postReducer,
    follower: followerReducer,
})

export default  rootReducer