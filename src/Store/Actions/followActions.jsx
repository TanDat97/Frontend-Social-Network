
import * as AT from './ActionTypes';

export const followFriend = (friend, authUser) => { 
	return (dispatch , getState,{getFirebase,getFirestore}) => { 
        const firestore = getFirestore()
        console.log(friend);
        console.log(authUser);
        
        // firestore.collection('Post').doc(post.id.toString()).update({
        //     following: [...historyComments,comment],
        // }).then( () =>  { 
        //     dispatch({
        //         type:AT.Comment_Status_Success,
        //     }); 
        // }).catch((err) => {
        //     dispatch({
        //         type: AT.Comment_Status_Error,
        //         err: err,
        //     });
        // })
	}
}