import React from "react";
import "./App.css";

export default class Nav extends React.Component {
  state = {
    input: "london"
  };
  onInput = e => this.setState({ input: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <nav style={{ backgroundColor: this.props.navColor(this.props.nbID) }}>
        <label className="label-city">
          <input
            type="text"
            name="city"
            value={this.state.input}
            className="city"
            onChange={this.onInput}
          ></input>
        </label>
        <button
          className="btn-search"
          type="submit"
          handlePress={this.props.handle}
          onClick={this.onSubmit}
          style={{
            backgroundColor: this.props.buttonBackground(this.props.nbID)
          }}
        >
          FIND WEATHER
        </button>
      </nav>
    );
  }
}
