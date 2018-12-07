import * as AT from "../Actions/ActionTypes"

const initState = {
    firstName: "Dai",
    lastName: "Nguyen",
    id: "312312",
    gender: "Nam",
    email: "asdasok@gmail.com",
    phone: "0123214",
}

const authReducer = (state = initState, action) => { 
    switch( action.type ) { 
        ////
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

