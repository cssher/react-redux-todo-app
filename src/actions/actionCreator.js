//Defining action creators to be accessed by reducers to implement final business logic.
//All the reducers depend on the pay-load from action creators to mutate state in the application.

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  CLEAR_ALL
} from "./actionsTypes";

let TodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: TodoId++,
  text
});

export const deleteTodo = id => ({
  type: REMOVE_TODO,
  id: id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const clearAll = id => ({
  type: CLEAR_ALL,
  id: id
});
