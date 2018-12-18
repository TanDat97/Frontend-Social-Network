
import * as AT from './ActionTypes';

export const followFriend = (friend, authUser,post) => { 
	return (dispatch , getState,{getFirebase,getFirestore}) => { 
        const firestore = getFirestore()
        console.log(friend);
        console.log(authUser);
        var authFollowing = authUser.following
        var friendFollower = friend.follower
     
            
        
        firestore.collection("Profile").doc(authUser.email).update({
        following: [...authFollowing, friend.email]
        }).then( () =>  { 
        
                
                dispatch({
                type: AT.Update_Auth_Profile_Success,
                });
        
            
        }).catch((err) => {
                alert(err)
                dispatch({
                type: AT.Update_Auth_Profile_Error,
                error:err,
                });
        })


        firestore.collection("Profile").doc(friend.email).update({
                follower: [...friendFollower, authUser.email]
                }).then( () =>  { 
                
                        
                        dispatch({
                        type: AT.Update_Auth_Profile_Success,
                        });
        
                }).catch((err) => {
                        alert(err)
                        dispatch({
                        type: AT.Update_Auth_Profile_Error,
                        error:err,
                        });
                })

              
         
                firestore.collection('Post').doc(post.id.toString()).update({
                     
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