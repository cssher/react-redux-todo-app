import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreator";
import { bindActionCreators } from "redux";

import "./container.css";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: ""
    };
    this.onChangeTodoText = this.onChangeTodoText.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onSubmitChange = e => {
    e.preventDefault();
    this.setState({
      todotext: this.state.todotext
    });
  };

  onChangeTodoText = e => this.setState({ todotext: e.target.value });
  //Rendering logic for an add button which adds todo item to the list.
  render() {
    return (
      <div className="add-todo-card">
        <h1 style={{ color: "purple", paddingRight: "20px" }}>Todos</h1>
        <form onSubmit={this.onSubmitChange}>
          <input
            required
            onChange={this.onChangeTodoText}
            value={this.state.todotext}
            type="text"
            className="input-form"
            placeholder="Add your tasks here..."
          />
          <button
            formNoValidate
            type="submit"
            onClick={() => {
              this.props.addTodo(this.state.todotext);
              this.setState({ todotext: "" });
            }}
            className="add-btn"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
//Dispatching all the logic to be bound with action creators for ultimate business logic.
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(CreateTodo);
