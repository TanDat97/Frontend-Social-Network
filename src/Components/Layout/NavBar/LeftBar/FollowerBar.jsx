import React from 'react';

const FollowerBar = ( {Follower}) => {
    return (
        <div className ="card">
        <div className = "card-body">
        <a href="/thayTenODay/follower"><h3 className ="card-title text-secondary">Followers</h3> </a>
            <div className = "card-text">
                <ul className="list-unstyled"> 
                    {
                        Follower.Follower_List.map((each,index) => { 
                            return (
                                <li key = {index}><a href = "#follower" >#{each.name}</a></li>
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