import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Item from "./components/Item";
import dummyItems from "./dummyItems.json";

import "./styles.css";

const initialState = {
  todo: ""
};

class App extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    const items = dummyItems.item;
    event.preventDefault();
    if (this.state.todo !== "") {
      items.reverse();
      items.push({ key: items.length + 1, name: this.state.todo });
      items.reverse();
      this.clearState();
    } else {
      this.nameInput.focus();
    }
  };

  render() {
    const items = dummyItems.item;
    const { todo } = this.state;
    return (
      <div className="App">
        <h2>Hello!</h2>
        <p>Welcome to my todo list.</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="todo"
            value={todo}
            placeholder="Add a new todo"
            onChange={this.handleChange}
            maxLength="25"
            ref={input => {
              this.nameInput = input;
            }}
          />
          <Button green type="submit" />
        </form>
        <ul>
          {items.map(item => (
            <Item key={item.id} {...item} disabled={item.disabled} />
          ))}
        </ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
