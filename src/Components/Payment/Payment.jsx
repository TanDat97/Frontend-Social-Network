import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as handleTransaction from "../../Function/HandleTransaction"
import { StrKey, Keypair } from 'stellar-base';


class Payment extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            isSubmitButtonEnable: true,
            paramPublicKey:null,
        }
    }

    componentDidMount() { 
        var pathName = this.props.history.location.pathname;
        
        var public_key = pathName.split("/");
        public_key = public_key[2]

        this.setState({
            paramPublicKey: public_key,
        })
    }
    

    isInt(e) { 
        e.preventDefault()
        console.log(e.target.value);
        
        if (isNaN(e.target.value) || e.target.value == " ") {
            alert("Số tiền chỉ chứa số!")
            e.target.value = e.target.value.slice(0, -1);
        } 
    }

    handleOnSubmit() { 
        const receive_public_key = document.getElementById("pb_receive").value        
        const amount = parseInt(document.getElementById("amount").value)
        const send_private_key = document.getElementById("pr_send").value

        
        
        if (StrKey.isValidEd25519SecretSeed(send_private_key) ) {
            var send_public_key = Keypair.fromSecret(send_private_key);
            send_public_key = send_public_key.publicKey()
            var getAccount = "/account/"
            axios.post(getAccount, { 
                public_key: send_public_key
            }).then(response => { 
                var data = response.data
                if ( data.error) { 
                    alert(data.error)
                    this.props.history.push(data.redirect)
                }
                else {
                    var sequence = data.sequence + 0
                    var paymentEncode = handleTransaction.encodePaymentTransaction(send_public_key,receive_public_key,amount,send_private_key,sequence)
                    
                    axios.post("/broadcast_commit",{
                        enCodeTransaction: paymentEncode,
                    }).then(response => {
                        alert(response.data.message)
                        window.location.reload();
                    }).catch(err=> { 
                        alert(err)
                    })
                }
            })
            
            
        }
        else { 
            alert("Invalid private key!");
        }
    }

    enableSubmitButton() { 
       var text = document.getElementById("amount").value
       console.log(text);
       
        if (text)
            this.setState({
                isSubmitButtonEnable: false
            })
        else 
        this.setState({
            isSubmitButtonEnable: true
        })
    }

    render() {
        return (
            <div className = "container shadow p-3 mb-5 bg-white rounded"> 
                <br/>
                <form onSubmit = {this.handleSubmit} className = "white"> 
                    <h2><strong>Chuyển khoản</strong> </h2>

                    <div className = "input-field">
                        <label htmlFor = "text">Private Key Send</label>
                        <input type ="text" class="form-control" id = "pr_send" required/>
                    </div>

                    <div className = "input-field">
                        <label htmlFor = "text">Public Key Receive</label>
                        <input type ="text" class="form-control" id = "pb_receive" value = {this.state.paramPublicKey} required/>
                    </div>

                    <div className = "input-field">
                        <label htmlFor = "text">Số tiền</label>
                        <input type="text" pattern="[0-9]*" class="form-control" id = "amount" required onChange = {this.isInt} onKeyUp = {this.enableSubmitButton.bind(this)} required/>
                    </div>

                     <br/>
                        <button type="button" id = "submit" onClick= {this.handleOnSubmit.bind(this)} className="btn btn-primary blue" disabled = {this.state.isSubmitButtonEnable} >Confirm</button>
                    
                </form>
                <br/>
            </div>
        );
    }
}


export default Payment;