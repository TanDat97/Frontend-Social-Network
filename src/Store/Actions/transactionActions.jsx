import * as  AT from './ActionTypes'
import Axios from 'axios';
import { Keypair } from 'stellar-base/lib/keypair';
import * as  handleTransaction from "../../Function/HandleTransaction"
import base32 from "base32.js"
import vstruct from "varstruct"

const PlainTextContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
]);

const ReactContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'reaction', type: vstruct.UInt8 },
  ]);

const Followings = vstruct([
    { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
]);





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
                    break;

                    case "update_avatar":
                        var avatar = contentTx.avatar
                        var updateAvatarTx = handleTransaction.encodeUpdatePictureTransaction(publicKey,avatar,privateKey,sequence)
                        commitUpdateAvatar(updateAvatarTx,dispatch)
                    break;
            
                    case "comment":
                        var comment = contentTx.data.comment
                        var hash = contentTx.data.hash
                        var content = new Buffer.from(PlainTextContent.encode(comment));

                        var commentTx = handleTransaction.encodeInteractTransaction(publicKey,hash,content,privateKey,sequence)
                        console.log(commentTx);
                        broadCastCommit(commentTx,dispatch)
                        
                        // var content = new Buffer.from(PlainTextContent.encode(comment));
                        
                    break;

                    case "react":
                        var react = contentTx.data.react
                        var hash = contentTx.data.hash
                        var content = new Buffer.from(ReactContent.encode(react));

                        var commentTx = handleTransaction.encodeInteractTransaction(publicKey,hash,content,privateKey,sequence)
                        console.log(commentTx);
                        broadCastCommit(commentTx,dispatch)
                        
                        // var content = new Buffer.from(PlainTextContent.encode(comment));
                        
                    break;

                   
                    case "update_follow":
                        // var followings = contentTx.followings
                        // var followingsAfterDecode = {
                        //     addresses: new Array(),
                        // }
                        // var temp = followings.addresses.map( each => each  = base32.decode(each))
                        // followingsAfterDecode.addresses = [...followingsAfterDecode.addresses,...temp]
                        // console.log(followingsAfterDecode);

           
                        
                        // var updateParams = Buffer.from(Followings.encode(followingsAfterDecode));
                        // var updateFollowTx = handleTransaction.encodeUpdateFollowingsTransaction(publicKey,updateParams,privateKey,sequence)
                        // broadCastCommit(updateFollowTx, dispatch)
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
