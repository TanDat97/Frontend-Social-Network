import React, { Component } from 'react';
import * as globalVariable from "../../../Global/Variable/GlobalVariable"
//Connect redux
import { connect } from 'react-redux';

class TopHomePage extends Component {
    
  render() {
 
    return (
        <div className="profile-cover">
                    <div className="cover rounded shadow no-overflow">
                        <div className="inner-cover">
                            
                            <img  src={globalVariable.default_cover_picture} className="img-responsive full-width" alt="cover" style={{width: 1000, height: 200}}/>
                        </div>
                    </div>
                </div>

                
             
    );
  }
}


export default TopHomePage

