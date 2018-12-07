import * as AT from "../Actions/ActionTypes"

const initState = {
    firstName: "Dai",
    lastName: "Nguyen",
    email: "nguuyen@gmail.com",
    gender:"Male",
    phone: "0972002914"

}

const authReducer = (state = initState, action) => { 
    switch( action.type ) { 
        ////
        case AT.Fetch_Auth_Profile_Success:
            console.log(AT.Fetch_Auth_Profile_Success);
            return state;
        

        default:
            return state
    }
    
}

export default authReducer

