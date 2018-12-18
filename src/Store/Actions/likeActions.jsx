import * as AT from './ActionTypes'

export const liketoPost = (post, userLike) =>{
    return (dispatch , getState,{getFirebase,getFirestore}) => { 
    const firestore = getFirestore()
    var historyLike = post.like
        var isExistuser
        historyLike.map(each => {
            if(userLike.email === each)
            {
                isExistuser = each
            }
        })
      
        if(isExistuser)
        {
                firestore.collection('Post').doc(post.id.toString()).update({
                    like: [...historyLike],
                }).then( () =>  { 
                    dispatch({
                        type:AT.Like_Status_Success,
                    }); 
                }).catch((err) => {
                    dispatch({
                        type: AT.Like_Status_Error,
                        error:err,
                    });
                })
                            
        }
        else {
            firestore.collection('Post').doc(post.id.toString()).update({
                like: [...historyLike,userLike.email],
            }).then( () =>  { 
                dispatch({
                    type:AT.Like_Status_Success,
                }); 
            }).catch((err) => {
                dispatch({
                    type: AT.Like_Status_Error,
                    error:err,
                });
            })
            
        }
    }
}