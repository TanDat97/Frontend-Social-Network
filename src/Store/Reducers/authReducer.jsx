import * as AT from "../Actions/ActionTypes"

const initState = {
    
}
const authReducer = (state = initState, action) => { 
    switch( action.type ) { 
        case AT.LOGIN_ERROR : 
            return {
                ...state,
                authError: action.error,
            }
        case AT.LOGIN_SUCCESS:
            console.log("Login Success")
            return { 
                ...state,
                authError: null,
                
            }
        case "SIGUP_ERROR" : 
            console.log("SIGUP_ERROR")
            return {
                ...state,
                authError: action.error,
            }
        case "SIGNUP_SUCCESS":
        console.log("SIGNUP_SUCCESS")
            return { 
                ...state,
                authError: null,
                
            }
        case AT.LOGIN_GOOGLE_ERROR : 
            return {
                ...state,
                authError: action.error,
            }
        case AT.LOGIN_GOOGLE_SUCCESS:
           console.log("Login Google Success")
            return { 
                ...state,
                authError: null,
                
            }

        case AT.SIGN_OUT_SUCCESS:
            console.log("Signout success");
            return state
            
        case AT.Fetch_Auth_Profile_Success:
            console.log(AT.Fetch_Auth_Profile_Success);
            return state;

        case AT.Update_Auth_Profile_Success:
            console.log(AT.Update_Auth_Profile_Success);
            return state;

        default:
            return state      
    }
}






export default authReducer

