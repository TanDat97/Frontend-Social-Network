export const FetchPost = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Newsfeed_Success,
        })  
	}
}