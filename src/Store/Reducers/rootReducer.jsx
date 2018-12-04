import {combineReducers} from 'redux'

//Actions
import followerReducer from "./followerReducer"
import postReducer from "./postReducer"
import followingReducer from './followingReducer'

const rootReducer = combineReducers({ 
    post: postReducer,
    follower: followerReducer,
    following: followingReducer
})

export default  rootReducer