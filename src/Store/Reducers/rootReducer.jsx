import {combineReducers} from 'redux'

//Actions

import newsfeedReducers from "./newsfeedReducer"
import followReducer from './followReducer';


const rootReducer = combineReducers( { 
    newsfeed: newsfeedReducers,
    follow: followReducer
})

export default  rootReducer