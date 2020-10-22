import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    this.props.addtodo(this.state.text);
    this.setState({ text: " " });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.submit}>
        <input
          type="textbook"
          style={{ flex: "10" }}
          onChange={this.handleChange}
          placeholder="type your todo"
          value={this.state.text}
        />
        <input
          type="submit"
          style={{
            flex: "1",
            padding: "7px 20px",
            color: "red",
            float: "right",
            background: "black",
          }}
          value="submit"
          className="btn"
        />
      </form>
    );
  }
}
