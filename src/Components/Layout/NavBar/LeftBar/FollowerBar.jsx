import React from 'react';

const FollowerBar = ( {follower}) => {
    console.log(follower)
    return (
        <div className ="card">
        <div className = "card-body">
        <h3 className ="card-title text-secondary">Followers</h3>
            <div className = "card-text">
                <ul className="list-unstyled"> 
                    {

                        follower.map((each,index) => { 
                            return (
                                <li key = {index}><a href = {"/profile/" + each.publicKey}  >#{each.displayName}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>  
    </div>
    );
};

export default FollowerBar;