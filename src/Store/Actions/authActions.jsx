import * as AT from "./ActionTypes"

export const fetchAuthProfile = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Auth_Profile_Success,
        })  
	}
}