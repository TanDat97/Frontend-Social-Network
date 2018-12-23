import  * as transaction from './function/transaction/index';

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
  
    var post = { type: 1, text: content, }
    var content = new Buffer.from(JSON.stringify(post));

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

// function encodeUpdateNameTransaction  (account, updateNameParams, private_key) {
//     return new Promise((resolve, reject) => {     
//         var req = publicDomain + "/tx_search?query=%22account=%27"+account+"%27%22"    
//         axios.get(req)
//         .then(response => {
//             const data = response.data.result.txs.map((each) => {
//                 each.tx = decodeTransaction(each.tx);
//                 each.tx.memo = each.tx.memo.toString();
//                 each.tx.signature = each.tx.signature.toString('hex');
//                 return each;
//             })
//             var sequence = findSequenceAvailable(data, account);
//             const tx = {
//                 version: 1, 
//                 operation: "update_account",
//                 params: {
//                         key: 'name',
//                         value: updateNameParams,
//                     },
//                 account: account,
//                 sequence: sequence,
//                 memo: Buffer.alloc(0),
//             }
//             transaction.sign(tx, private_key);
//             const txEncode =  "0x" + transaction.encode(tx).toString('hex')
//             resolve(txEncode);
//         })
//         .catch(error => {
//             console.log(error);
//             reject(error);
//         });
//     }, err => {
//         reject(err);
//     });
// }

// function encodeUpdatePictureTransaction  (account, updatePictureParams, private_key) {
//     return new Promise((resolve, reject) => {     
//         var req = publicDomain + "/tx_search?query=%22account=%27"+account+"%27%22"    
//         axios.get(req)
//         .then(response => {
//             const data = response.data.result.txs.map((each) => {
//                 each.tx = decodeTransaction(each.tx);
//                 each.tx.memo = each.tx.memo.toString();
//                 each.tx.signature = each.tx.signature.toString('hex');
//                 return each;
//             })
//             var sequence = findSequenceAvailable(data, account);
//             const tx = {
//                 version: 1, 
//                 operation: "update_account",
//                 params: {
//                         key: 'picture',
//                         value: updatePictureParams,
//                     },
//                 account: account,
//                 sequence: sequence,
//                 memo: Buffer.alloc(0),
//             }
//             transaction.sign(tx, private_key);
//             const txEncode = transaction.encode(tx).toString('base64');
//             resolve(txEncode);
//         })
//         .catch(error => {
//             console.log(error);
//             reject(error);
//         });
//     }, err => {
//         reject(err);
//     });
// }

// function encodeUpdateFollowingsTransaction  (account, Followings, private_key) {
//     return new Promise((resolve, reject) => {     
//         var req = publicDomain + "/tx_search?query=%22account=%27"+account+"%27%22"    
//         axios.get(req)
//         .then(response => {
//             const data = response.data.result.txs.map((each) => {
//                 each.tx = decodeTransaction(each.tx);
//                 each.tx.memo = each.tx.memo.toString();
//                 each.tx.signature = each.tx.signature.toString('hex');
//                 return each;
//             })
//             var sequence = findSequenceAvailable(data, account);
//             const tx = {
//                 version: 1, 
//                 operation: "update_account",
//                 params: {
//                         key: 'followings',
//                         value: Followings,
//                     },
//                 account: account,
//                 sequence: sequence,
//                 memo: Buffer.alloc(0),
//             }
//             transaction.sign(tx, private_key);
//             const txEncode =  "0x" + transaction.encode(tx).toString('hex')
//             resolve(txEncode);
//         })
//         .catch(error => {
//             console.log(error);
//             reject(error);
//         });
//     }, err => {
//         reject(err);
//     });
// }

// const decodeTransaction = (data) => {  
//     var transaction = v1.decode(Buffer.from(data, 'base64'));
//     return transaction;
// }

