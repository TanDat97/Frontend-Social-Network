import * as AT from './ActionTypes';

export const fetchFollower = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Follower_Success,
        })  
	}
}