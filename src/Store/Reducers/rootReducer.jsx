import {combineReducers} from 'redux'

//Actions

import newsfeedReducers from "./newsfeedReducer"


const rootReducer = combineReducers( { 
    newsfeed: newsfeedReducers,
})

export default  rootReducer