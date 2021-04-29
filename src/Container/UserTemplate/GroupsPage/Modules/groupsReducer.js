import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
    loading:null,    

}

const groupsReducer = (state = initialState, acction) => {
    switch (acction.type) {

    case ActionType.GET_LIST_GROUPS_REQUEST:
        state.data=null;
        state.err=null;
        state.loading=true;
        return { ...state}
    case ActionType.GET_LIST_GROUPS_SUCCESS:
        state.data=acction.payload;
        state.err=false;
        state.loading=false;
        return {...state}
    case ActionType.GET_LIST_GROUPS_FAILED:
          state.data=false;
        state.err=true;
        state.loading=false;
        return {...state}

    default:
        return state
    }
  
}
  export default groupsReducer;