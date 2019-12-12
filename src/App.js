import React from "react";
import CreateTodo from "./containers/CreateTodo";
import Table from "./containers/Table";

import "./App.css";
//Final app that combines all the sub-components of the whole application.
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="create-todo">
            <CreateTodo />
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
