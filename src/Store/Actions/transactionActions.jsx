import * as  AT from './ActionTypes'
import Axios from 'axios';
import { Keypair } from 'stellar-base/lib/keypair';
import * as  handleTransaction from "../../Function/HandleTransaction"
import vstruct from "varstruct"



export const encodeAndCommitTX = (contentTx, privateKey, address) => {
    return (dispatch) => {
        var publicKey = Keypair.fromSecret(privateKey);
        publicKey = publicKey.publicKey()
        console.log(publicKey);
        
        Axios.post("/account/", { 
            public_key: publicKey
        }).then(response => { 
            var data = response.data
            if ( data.error) { 
                alert(data.error)
                window.location.replace(data.redirect)
            }
            else {
                var sequence = data.sequence + 0
     
                switch(contentTx.type) { 
                    case "create_account":
                        var createEncode = handleTransaction.encodeCreateAccountTransaction(publicKey,contentTx.newPublicKey,privateKey,sequence)
                        broadCastCommit(createEncode, dispatch)
                    break;
    
                    case "post":
                        var postEncode =  handleTransaction.encodePostTransaction(publicKey, contentTx.contentPost, privateKey, sequence)
                        broadCastCommit(postEncode, dispatch)
                        
                    break;
    
                    case "payment":
                        var paymentEncode = handleTransaction.encodePaymentTransaction(publicKey,address,contentTx.amount,privateKey,sequence)  
                        broadCastCommit(paymentEncode, dispatch)
                    break;
    
                    case "update_name":
                        var displayName = new Buffer.from(contentTx.displayName);
                        var updateNameEncode = handleTransaction.encodeUpdateNameTransaction(publicKey,displayName,privateKey,sequence)
                        broadCastCommit(updateNameEncode, dispatch)
                        // var paymentEncode = handleTransaction.encodePaymentTransaction(publicKey,address,contentTx.amount,privateKey,sequence)  
                        // RPCCommit(paymentEncode, dispatch)
                    break;

                    case "update_avatar":
                        // var avatar = new Buffer.from(contentTx.avatar);
                        var updateAvatarTx = handleTransaction.encodeUpdatePictureTransaction(publicKey, contentTx.avatar,privateKey,sequence)
                        commitUpdateAvatar(updateAvatarTx,dispatch)
                    break;
                }
            }
        })
    } 
}


const broadCastCommit = (encodeTx,dispatch) => {
        Axios.post("/broadcast_commit",{
            enCodeTransaction: encodeTx,
        }).then(response => {
            alert("Commit - " + response.data.message)
            window.location.reload();
            dispatch({ 
                message: response.data.message,
                type: AT.BROAD_CAST_SUCCESS,
            })
        }).catch(err=> { 
            alert("Commit" + err)
            dispatch({
                error: err,
                type: AT.BROAD_CAST_ERROR,
            })
        })
    
}


const commitUpdateAvatar = (encodePictureTransaction,dispatch) => {
    Axios.post("/update_picture",{
        encodePictureTransaction: encodePictureTransaction,
    }).then(response => {
        alert("Commit Picture - " + response.data.message)
        window.location.reload();
        dispatch({ 
            message: response.data.message,
            type: AT.BROAD_CAST_SUCCESS,
        })
    }).catch(err=> { 
        alert("Commit Picture - " + err)
        dispatch({
            error: err,
            type: AT.BROAD_CAST_ERROR,
        })
    })

}
