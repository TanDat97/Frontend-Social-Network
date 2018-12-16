import React, { Component } from 'react';

//Connect redux
import { connect } from 'react-redux';

class TopHomePage extends Component {
    
  render() {
 
    return (
        <div className="profile-cover">
                    <div className="cover rounded shadow no-overflow">
                        <div className="inner-cover">
                            
                            <img  src="https://znews-photo.zadn.vn/Uploaded/neg_yrznslt/2018_12_16/subtit_02.jpg" className="img-responsive full-width" alt="cover" style={{width: 1000, height: 200}}/>
                        </div>
                    </div>
                </div>

                
             
    );
  }
}


export default TopHomePage

