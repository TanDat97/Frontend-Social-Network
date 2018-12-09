import * as AT from "./ActionTypes"

export const fetchPost = () => { 
	return  (dispatch) => { 
        dispatch({
            type:AT.Fetch_Post_Success,
        })  
	}
}

export const postStatus = (post) => {

    return (dispatch , getState,{getFirebase,getFirestore}) => { 
        const firestore = getFirestore()
        console.log('afasdf'+ post.id)
        firestore.collection("Post").doc(post.id.toString()).set({
            ...post,
         }).then( () =>  { 
             dispatch({
                 type: AT.Post_Status_Success,
             });
         }).catch((err) => {
             dispatch({
                 type: AT.Post_Status_Error,
                 err: err,
             });
         })
        } 
        
}