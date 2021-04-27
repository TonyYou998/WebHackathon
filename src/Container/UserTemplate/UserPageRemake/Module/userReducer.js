import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
    loading:null,
}

const userReducer= (state = initialState, action) => {
    switch (action.type) {

    case ActionType.GET_USER_DATA_REQUEST:
        state.loading=true;
        state.data=false;
        state.err=null;

        return { ...state}
    case ActionType.GET_USER_DATA_SUCCESS:
        state.data=action.payload;
        state.err=false;
        state.loading=false;
        return {...state}
    case ActionType.GET_USER_DATA_FAILED:
        state.err=action.payload;
        state.loading=false;
        state.data=false;
        return {...state}
    case ActionType.GET_USER_DATA_CLEAR:
        state.err=false;
        state.loading=false;
        state.data=false;
    default:
        return {...state}
    }
}
export default userReducer;
