import * as AT from './ActionTypes';

export const followFriend = (friend, authUser) => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Follow_Friend_Success,
        })  
	}
}

