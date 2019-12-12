import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter,
  clearAll
} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";

import "./container.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyAll: ""
    };
  }

  //Creating logic for the todo table.

  render() {
    return (
      <div className="ToDo">
        <nav>
          <ul className="footer">
            <li>
              {" "}
              <a
                href="#"
                class="selected1"
                onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
              >
                All
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#"
                class="selected2"
                onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
              >
                Completed
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#"
                class="selected3"
                onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
              >
                Active
              </a>
            </li>
          </ul>
        </nav>
        {this.props.todos.length !== 0 ? (
          <table className="todo-table">
            <tbody>
              {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none", //logic for getting a line-through and other transition effects on the todo item on clicking a mark complete button.
                      textDecorationColor: todo.completed ? "red" : "none",
                      lineHeight: todo.completed ? "1em" : "none",
                      fontSize: todo.completed ? "15pt" : "12pt",
                      background: todo.completed ? "#85ffb4" : "none",
                      borderRadius: todo.completed ? "25px" : "none",
                      boxShadow: todo.completed ? "0 0 30px" : "none",
                      opacity: todo.completed ? "0.5" : "none",
                      transition: todo.completed
                        ? "1s background ease-in"
                        : "1s background ease-out",
                      color: todo.completed ? "black" : "white",
                      opacity: todo.completed ? "1" : "none"
                    }}
                  >
                    {todo.text}
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => this.props.deleteTodo(todo.id)}
                      style={{
                        color: "white",
                        backgroundColor: "red"
                      }}
                    >
                      X
                    </button>

                    <button
                      className="btn"
                      onClick={() => this.props.toggleTodo(todo.id)}
                      style={{ color: "white", backgroundColor: "#06fa06c9" }}
                    >
                      ✔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="message">
            <div>
              <h4>Empty List. Please add tasks to see here.</h4>
            </div>
          </div>
        )}
        <button
          className="clear-btn"
          onClick={() => {
            this.props.clearAll(this.state.emptyAll);
            this.setState({ emptyAll: "" });
          }}
        >
          Clear All
        </button>
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter,
      clearAll
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
