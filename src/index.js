import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoListPageContainer from "./pages/TodoListPage/containers/TodoListPageContainer";
import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListPageContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
