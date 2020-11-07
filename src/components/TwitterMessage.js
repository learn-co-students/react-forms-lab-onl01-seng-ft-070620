import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      chars: 0,
    };
  }

  handleCharChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleCharChange}
          value={this.state.message}
        />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
