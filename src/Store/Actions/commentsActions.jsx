import * as  AT from './ActionTypes'

export const CommentStatus = (text,comments ) => {
    return (dispatch , getState,{getFirebase,getFirestore}) => { 
        
          const firestore = getFirestore()
   
    
            var historyComments = comments.comments
            console.log(historyComments)
            historyComments.push({
                Profile:{id: "Thanh Dai",name: "Thanh"},
                text: text
            })
            firestore.collection('Post').doc(comments.id.toString()).update({
                comments: historyComments,
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