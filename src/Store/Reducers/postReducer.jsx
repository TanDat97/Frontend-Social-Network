import * as AT from "../Actions/ActionTypes"

const initState = {
    data:[],
    page:1,
}

const postReducer = (state = initState, action) => { 
    switch( action.type ) { 
        ////
        case AT.Get_Post_Status_Success:
            return {
                data: action.data,
                page: action.page,
            };

        case AT.FETCH_POST_USER_SUCCESS:
            return {
                data: action.listPost,
            };

        default:
            return state
    }
    
}

export default postReducer

