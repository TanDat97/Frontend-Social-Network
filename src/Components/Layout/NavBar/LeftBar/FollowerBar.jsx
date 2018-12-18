import React from 'react';

const FollowerBar = ( {follower}) => {
    return (
        <div className ="card">
        <div className = "card-body">
        <a href="/thayTenODay/follower"><h3 className ="card-title text-secondary">Followers</h3> </a>
            <div className = "card-text">
                <ul className="list-unstyled"> 
                    {
                        follower.map((each,index) => { 
                            return (
                                <li key = {index}><a href = "#follower" >#{each}</a></li>
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