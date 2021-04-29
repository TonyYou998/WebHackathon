import { combineReducers } from "redux";
import userReducer from "../../Container/UserTemplate/UserPageRemake/Module/userReducer";
import groupsReducer from "../../Container/UserTemplate/GroupsPage/Modules/groupsReducer";
const rootReducer=combineReducers({
    userReducer,
    groupsReducer,

});
export default rootReducer;
