import * as AT from "../Actions/ActionTypes"

const initState = [
    {
        postTime: "1, tháng 3, 2018",
        userPost: "Duy Truong",
        id: "1512074",
        text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "5, tháng 5, 2018",
        userPost: "Dai Truong",
        id: "1512074",
        text: "Dolorem aspernatur rerum, iure? Cceat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "12, tháng 11, 2018",
        userPost: "Dat Truong",
        id: "1512074",
        text: "qui, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "21, tháng 12, 2018",
        userPost: "Dat Truong",
        id: "1512074",
        text: "qui, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "1, tháng 3, 2018",
        userPost: "Duy Truong",
        id: "1512074",
        text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "5, tháng 5, 2018",
        userPost: "Dai Truong",
        id: "1512074",
        text: "Dolorem aspernatur rerum, iure? Cceat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "12, tháng 11, 2018",
        userPost: "Dat Truong",
        id: "1512074",
        text: "qui, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "21, tháng 12, 2018",
        userPost: "Dat Truong",
        id: "1512074",
        text: "qui, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "1, tháng 3, 2018",
        userPost: "Duy Truong",
        id: "1512074",
        text: "Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "5, tháng 5, 2018",
        userPost: "Dai Truong",
        id: "1512074",
        text: "Dolorem aspernatur rerum, iure? Cceat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "12, tháng 11, 2018",
        userPost: "Dat Truong",
        id: "1512074",
        text: "qui, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
    {
        postTime: "21, tháng 12, 2018",
        userPost: "Dat Truong",
        id: "1512074",
        text: "qui, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat." ,
        images: "",
        postID: "123241"
    },
]

const postReducer = (state = initState, action) => { 
    switch( action.type ) { 
        ////
        case AT.Fetch_Post_Success:
            console.log(AT.Fetch_Post_Success);
            return state;

        default:
            return state
    }
    
}

export default postReducer

