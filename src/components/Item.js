import React from "react";

import Button from "./Button";

class Item extends React.Component {
  state = {
    disabled: this.props.disabled,
    remove: true
  };
  handleCheck = event => {
    this.setState({ disabled: !this.state.disabled });
  };
  handleRemove = event => {
    this.setState({ remove: false });
  };
  render() {
    const { name } = this.props;
    const { disabled, remove } = this.state;

    const item = (
      <div className="Item">
        <li className={disabled ? "disabled" : ""}>{name}</li>
        <label className="container">
          <input
            type="checkbox"
            onChange={this.handleCheck}
            checked={disabled}
          />
          <span className="checkmark" />
        </label>
        <Button red clickon={this.handleRemove} />
      </div>
    );

    return <div>{remove ? item : null}</div>;
  }
}

export default Item;
