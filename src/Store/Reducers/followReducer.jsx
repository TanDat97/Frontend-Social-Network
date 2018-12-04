import * as AT from "../Actions/ActionTypes"

const initState = {
    Following_List: [
        {
            followTime: "1, tháng 3, 2018",
            userName: "Duy Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "5, tháng 5, 2018",
            userName: "Dai Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "12, tháng 11, 2018",
            userName: "Dat Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "21, tháng 12, 2018",
            userName: "Dat Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "1, tháng 3, 2018",
            userName: "Duy Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "5, tháng 5, 2018",
            userName: "Dai Truong",
            text: "Dolorem aspernatur rerum, iure? Cceat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "12, tháng 11, 2018",
            userName: "Dat Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "21, tháng 12, 2018",
            userName: "Dat Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "1, tháng 3, 2018",
            userName: "Duy Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "5, tháng 5, 2018",
            userName: "Dai Truong",
            text: "Dolorem aspernatur rerum, iure? Cceat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "12, tháng 11, 2018",
            userName: "Dat Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
        {
            followTime: "21, tháng 12, 2018",
            userName: "Dat Truong",
            text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga,", 
            image: "http://www.babywolfvn.com/wp-content/uploads/2014/04/cho-con.jpg",
            avatar: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        },
    ]
}
    

const FollowReducer = (state = initState, action) => { 
    switch( action.type ) { 
        case AT.Following_List:
            console.log(AT.Follower_List);
            return state;

        default:
            return state
    }
    
}

export default FollowReducer