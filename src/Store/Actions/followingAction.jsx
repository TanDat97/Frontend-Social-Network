import * as AT from './ActionTypes';
export const fetchFollowing = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Following_Success,
        })  
	}
}