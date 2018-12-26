import  * as transaction from './function/transaction/index';
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



export const encodeCreateAccountTransaction = (account, address, private_key,sequence) =>{

    const tx = {
        version: 1, 
        operation: "create_account",
        params: {
            address: address,
        },
        account: account,
        sequence: sequence,
        memo: Buffer.alloc(0),
    }
    transaction.sign(tx, private_key);

    const txEncode = "0x" + transaction.encode(tx).toString('hex')        
    return  txEncode;
      
}

export const  encodePaymentTransaction = (account, address, amount, private_key, sequence) => {

    const tx = {
        version: 1, 
        operation: "payment",
        params: {
            address: address,
            amount: amount,
        },
        account: account,
        sequence: sequence,
        memo: Buffer.alloc(0),
    }
    transaction.sign(tx, private_key);
    const txEncode =  "0x" + transaction.encode(tx).toString('hex')
    return txEncode
     
}

export const  encodePostTransaction = (account, contentPost, private_key, sequence) => {
  
    var post = { type: 1, text: contentPost}
    var content = new Buffer.from(PlainTextContent.encode(post));
    const tx = {
        version: 1, 
        operation: "post",
        params: {
            keys: [],
            content: content,
        },
        account: account,
        sequence: sequence,
        memo: Buffer.alloc(0),
    }
    transaction.sign(tx, private_key);
    const txEncode =  "0x" + transaction.encode(tx).toString('hex')

     return txEncode
     
}

export const encodeUpdateNameTransaction = (account, updateNameParams, private_key,sequence) => {
    const tx = {
        version: 1, 
        operation: "update_account",
        params: {
                key: 'name',
                value: updateNameParams,
            },
        account: account,
        sequence: sequence,
        memo: Buffer.alloc(0),
    }
    transaction.sign(tx, private_key);
    const txEncode =  "0x" + transaction.encode(tx).toString('hex')
    return txEncode
}

export const encodeUpdatePictureTransaction = (account, updatePictureParams, private_key,sequence) => {
    
    const tx = {
        version: 1, 
        operation: "update_account",
        params: {
            key: 'picture',
            value: updatePictureParams,
        },
        account: account,
        sequence: sequence,
        memo: Buffer.alloc(0),
    }
    transaction.sign(tx, private_key);
    const txEncode = transaction.encode(tx).toString('base64');
    return txEncode
}



export const  encodeUpdateFollowingsTransaction = (account, updateParams, private_key,sequence) => {
        const tx = {
            version: 1, 
            operation: "update_account",
            params: {
                key: 'followings',
                value: updateParams,
            },
            account: account,
            sequence: sequence,
            memo: Buffer.alloc(0),
        }
        transaction.sign(tx, private_key);
        const txEncode =  "0x" + transaction.encode(tx).toString('hex')
        return txEncode
}

// var hash = "DF828E91D9A81CAA848860BB02F2B4F2ADE7D2B8ACB3E80A5238FF74982F2C97";
//     var react = { 
//         type: 2, 
//         reaction: parseInt(req.body.reaction),
//     }
//     var content = new Buffer.from(ReactContent.encode(react));

// var hash = "942E9871C7D191C88929750BF782F78B3A5573A00F9453DBA65B4D05745CCF41";
// var comment = { 
//     type: 1, 
//     text: req.body.comment, 
// }
// var content = new Buffer.from(PlainTextContent.encode(comment));
// var broadcastRequest = Domain.dragonflyDomain + "broadcast_tx_commit?tx="

export const encodeInteractTransaction = (account, hash, content, private_key,sequence) => {
   
    const tx = {
        version: 1, 
        operation: "interact",
        params: {
            object: hash,
            content: content,
        },
        account: account,
        sequence: sequence,
        memo: Buffer.alloc(0),
    }
    transaction.sign(tx, private_key);
    const txEncode =  "0x" + transaction.encode(tx).toString('hex')
    return txEncode
   
}

// const decodeTransaction = (data) => {  
//     var transaction = v1.decode(Buffer.from(data, 'base64'));
//     return transaction;
// }

