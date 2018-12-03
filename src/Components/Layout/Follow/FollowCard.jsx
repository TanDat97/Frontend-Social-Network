import React from 'react'

const imgCard = {
    maxWidth: "240px",
    maxHeight: "150px"
}
const  cardContent ={ 
    maxHeight: "350px",
    overflow: "hidden",
}


const FollowCard = () => {
  return (
    <div>
        <div class="card" style = {cardContent}>
            <img class="card-img-top" style = {imgCard} src="http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg" alt="Card image cap"/>
            <div class="card-body">
                <h3 class="card-title">User name<span> <a href="#" class="btn btn-primary">Following</a> </span></h3> 
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <br/>
    </div>
  )
}

export default FollowCard
