import { combineReducers } from "redux";
import userReducer from "../../Container/UserTemplate/UserPageRemake/Module/userReducer";
// import lopHocReducer from "../../Container/UserTemplate/QuizPage/Modules/quizreducer";
const rootReducer = combineReducers({
  userReducer,
  //   lopHocReducer,
});
export default rootReducer;
