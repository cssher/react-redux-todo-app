//Creating reducers for Adding_Todo, Deleting_Todo, Toggle_Todo and Clearing_All_List

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CLEAR_ALL
} from "../actions/actionsTypes";

const INITIAL_DATA = [];

const TodoReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TODO: //Adds todo items to the list
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO: //show items only relevant to the link i.e. marked_completed, active & all.
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO: //straight-away deletes the todo item from thye list
      const numIndex = parseInt(action.id);
      return state.filter(todo => todo.id !== numIndex);

    case CLEAR_ALL: //deletes all todo items at once.
      return INITIAL_DATA;

    default:
      return state;
  }
};

export default TodoReducer;
