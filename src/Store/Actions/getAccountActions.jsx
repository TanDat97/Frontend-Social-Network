import * as  AT from './ActionTypes'
import Axios from 'axios';

export const getAccountFromServer = (publicKey) => {
    return (dispatch ) => { 
        
        var getAmount = "/account/"
        
        
        
        Axios.post(getAmount, {
            public_key: publicKey,
        })
        .then((response) => {
            var data = response.data
            if ( data.error)  
                this.props.history.push(data.redirect)
            
            else {
                 var userProfile = {}
                
                
                 
                userProfile["amount"] = data.amount?data.amount: "Nan";
                userProfile["energy"] = data.energy? data.energy : "Nan";            
                userProfile.displayName = data.displayName? data.displayName : "Account";
                userProfile["followings"] = data.followings ? data.followings: new Object({ addresses: new Array()})
                userProfile["post"] = data.post? data.post : new Array()
                userProfile["avatar"] = data.picture? "data:image/jpg;base64, " + data.picture : null
                

                userProfile["publicKey"] =  publicKey
                // userProfile["privateKey"] = this.state.authKey.privateKey
                
                //Khong setItem Localstorage cho authProfile 
                dispatch({
                    userProfile: userProfile,
                    type: AT.GET_ACCOUNT_SUCCESS
                })
            }
        })
        .catch( (error) => {
            console.log(error);
            dispatch({
                error: error,
                type: AT.GET_ACCOUNT_ERROR
            })
        });

      }
      
}