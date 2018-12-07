import * as AT from "../Actions/ActionTypes"

const initState = {
    Follower_List: [
        {
            name: "Duy Truong",
            id: "1512074" ,
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/zbvunua/2018_12_02/33.jpg",
            image: "http://images.alobacsi.vn/Images/Uploaded/Share/2018/09/10/80echo-can12.jpg",
        },
        {
            name: "Dai Nguyen",
            id: "1512092" ,
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/zbvunua/2018_12_02/55.jpg",
            image: "http://images.alobacsi.vn/Images/Uploaded/Share/2018/09/10/80echo-can12.jpg",
        },
        {
            name: "Dat Tran",
            id: "1512104" ,
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/zbvunua/2018_12_02/8.jpg",
            image: "http://images.alobacsi.vn/Images/Uploaded/Share/2018/09/10/80echo-can12.jpg",
        },
       
    ],
}

const followerReducer = (state = initState, action) => { 
    switch( action.type ) { 
        case AT.Fetch_Follower_Success:
            console.log(AT.Fetch_Follower_Success);
            return state;

        default:
            return state
    }
    
}

export default followerReducer

