import { combineReducers } from "redux";
import todoListManagerReducer from "../pages/TodoListPage/reducers";

const rootReducer = combineReducers({
  todoListManagerReducer,
});

export default rootReducer;
