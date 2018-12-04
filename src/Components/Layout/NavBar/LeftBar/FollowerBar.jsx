import React from 'react';

const FollowerBar = ( {getFollower}) => {
    return (
        <div className ="card">
        <div className = "card-body">
        <a href="thayTenODay/follower"><h3 className ="card-title text-secondary">Followers</h3> </a>
            <div className = "card-text">
                <ul class="list-unstyled"> 
                    {
                        getFollower.map(each => { 
                            return (
                                <li><a href = "#follower" >#{each.name}</a></li>
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