import * as  AT from './ActionTypes'

export const CommentToPost = (comment,post) => {
    return (dispatch , getState,{getFirebase,getFirestore}) => { 
        
        const firestore = getFirestore()
   
        console.log(post.id);
        
        var historyComments = post.comments
        
        firestore.collection('Post').doc(post.id.toString()).update({
            comments: [...historyComments,comment],
        }).then( () =>  { 
            dispatch({
                type:AT.Comment_Status_Success,
            }); 
        }).catch((err) => {
            dispatch({
                type: AT.Comment_Status_Error,
                err: err,
            });
        })

      }
      
}