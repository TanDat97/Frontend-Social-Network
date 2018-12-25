import * as AT from "../Actions/ActionTypes"

const initState = {}
const transactionReducer = (state = initState, action) => { 
    switch( action.type ) { 

        case AT.BROAD_CAST_ERROR:
            console.log(AT.BROAD_CAST_ERROR);
            return { 
                error: action.error,
            }

        case AT.BROAD_CAST_SUCCESS:
            console.log(AT.BROAD_CAST_SUCCESS);
            return { 
                message: action.message,
            }
       
        default:
            return state      
    }
}

export default transactionReducer

