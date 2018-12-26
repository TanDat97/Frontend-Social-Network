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

export const FetchPostByPage = (page) => {

    return (dispatch , getState,{getFirebase,getFirestore}) => { 
        const firestore = getFirestore()
        console.log(page);
        var startAt = page * 5 - 5
        var query = firestore.collection("Post")
                .orderBy("createTime",'desc')
                .limit(page * 5)
        
                
        return query.get().then(snap =>  { 
            var data = new Array();
            snap.forEach( doc => data.push(doc.data()))
            
            console.log(data);
            dispatch({
                data: data,
                page:page,
                type: AT.Get_Post_Status_Success,
            });
            }).catch((err) => {
                dispatch({
                    type: AT.Get_Post_Status_Error,
                    error:err,
            });
            
        })
 
        } 
}

export const FetchPostByUser = (publicKey) => { 
    return (dispatch , getState,{getFirebase,getFirestore})  => { 
        const firestore = getFirestore()
        var listPost = new Array()
        firestore.collection("Post").get().then( (snapshot) => { 
            snapshot.forEach( doc => {
                var temp = doc.data()
                console.log(temp);
                if ( !temp.currentBlock) {
                    var post = JSON.parse(temp.post)
                    if ( publicKey === post.account)
                        listPost = [...listPost,temp]
                }
            })
            
           
            console.log(listPost);
            dispatch( { 
                listPost: listPost,
                type: AT.FETCH_POST_USER_SUCCESS,
            })
        }) 
       
    }
}