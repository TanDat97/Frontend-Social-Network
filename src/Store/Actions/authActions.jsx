import * as AT from "./ActionTypes"

export const fetchAuthProfile = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Auth_Profile_Success,
        })  
	}
}


export const updateAuthProfile = () => { 
    return (dispatch , getState) => { 
        console.log(getState);
        
        dispatch({
            type: AT.Update_Auth_Profile_Success,
        })
    }
}