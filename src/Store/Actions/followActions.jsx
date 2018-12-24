import * as AT from './ActionTypes';

// export const followFriend = (friend, authUser,post) => { 
// 	return (dispatch , getState,{getFirebase,getFirestore}) => { 
//         const firestore = getFirestore()
 
//         var authFollowing = authUser.following
//         var friendFollower = friend.follower
  
//         var isExistFollow 
//         var isExistFollowing
//         friendFollower.map(each =>{
//                if(each.email == authUser.email)
//                {
//                        isExistFollow = each.email
//                }
//         })
//         authFollowing.map(each =>{
//                 if(each.email == friend.email)
//                 {
//                         isExistFollowing = each.email
//                 }
//          })
//          if(!isExistFollowing){
//                 firestore.collection("Profile").doc(authUser.email).update({
//                         following: [...authFollowing, friend]
//                         }).then(() =>  { 
//                                 dispatch({
//                                 type: AT.Update_Auth_Profile_Success,
//                                 });
                                
//                         }).catch((err) => {
//                                 alert(err)
//                                 dispatch({
//                                 type: AT.Update_Auth_Profile_Error,
//                                 error:err,
//                                 });
//                         })
//          }
//          else{
//                  console.log("email đã tồn tại")
//          }
//         if(!isExistFollow){
//                 firestore.collection("Profile").doc(friend.email).update({
//                         follower: [...friendFollower, authUser]
//                         }).then( () =>  { 
//                         dispatch({
//                         type: AT.Update_Auth_Profile_Success,
//                         });

//                         }).catch((err) => {
//                                 alert(err)
//                                 dispatch({
//                                 type: AT.Update_Auth_Profile_Error,
//                                 error:err,
//                                 });
//                 })
//                 alert("Bạn đã follow thành công")
//         }
//         else{
//                 console.log("Đã tồn tại email")
//         }
       
//         }
       
// }


export const followFriend = () => { 
      return (dispatch) => {
              
      }
}