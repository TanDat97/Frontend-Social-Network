import * as AT from "./ActionTypes"

export const fetchPost = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Post_Success,
        })  
	}
}