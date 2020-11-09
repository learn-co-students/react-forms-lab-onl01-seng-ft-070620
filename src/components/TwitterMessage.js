import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      remaining: 280
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      remaining: 280 - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <p>{this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
