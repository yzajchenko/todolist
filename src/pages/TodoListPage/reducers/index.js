import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  todoList: [],
};

let id = 1;

const TodoListManagerReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, { payload }) => {
      let index = id++;
      const dataNow = new Date();
      const dataFinish = new Date(payload.dataFinish);
      const newTask = {
        id: index,
        value: payload,
        isOnChange: true,
        complete: dataNow.getTime() - dataFinish.getTime() > 0,
      };
      return {
        ...state,
        todoList: [...state.todoList, newTask],
      };
    },
    [actions.REMOVE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const todoListNew = todoListCopy.filter((task) => task.id !== payload);
      return {
        ...state,
        todoList: todoListNew,
      };
    },
    [actions.CHANGE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy.filter((task) => task.id === payload);
      findTack.forEach((task) => (task.isOnChange = !task.isOnChange));
      return {
        ...state,
        todoList: todoListCopy,
      };
    },
    [actions.COMPLETE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy.filter((task) => task.id === payload);
      findTack.forEach((task) => (task.complete = !task.complete));
      return {
        ...state,
        todoList: todoListCopy,
      };
    },
    [actions.SAVE_CHANGE_TASK]: (state, { payload }) => {
      const todoListCopy = [...state.todoList];
      const findTack = todoListCopy.filter((task) => task.id === payload.id);
      findTack.forEach((task) => {
        task.isOnChange = !task.isOnChange;
        if (payload.value) {
          task.value = payload.value;
        }
      });
      return {
        ...state,
        todoList: todoListCopy,
      };
    },
  },
  initialState
);

export default TodoListManagerReducer;
