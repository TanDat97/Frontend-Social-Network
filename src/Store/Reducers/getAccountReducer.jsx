import * as AT from "../Actions/ActionTypes"

const initState = {
    
}
const getAccountReducer = (state = initState, action) => { 
    switch( action.type ) { 

        case AT.GET_ACCOUNT_ERROR:
            console.log(AT.GET_ACCOUNT_ERROR);
            return { 
                error: action.error,
            }

        case AT.GET_ACCOUNT_SUCCESS:
            console.log(AT.GET_ACCOUNT_SUCCESS);
            return { 
                userProfile: action.userProfile,
            }
       
        default:
            return state      
    }
}






export default getAccountReducer

