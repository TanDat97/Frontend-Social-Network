import * as AT from "./ActionTypes"
import axios from "axios"
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
        
        firestore.collection("Post").doc().set({
            ...post,
         }).then( () =>  {
            
            // axios.post()
            
             dispatch({
                 type: AT.Post_Status_Success,
             });
         }).catch((err) => {
             dispatch({
                 type: AT.Post_Status_Error,
                 error:err,
             });
         })
        } 
       
}