import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    const charLength = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.handleChange(event)} value={this.state.message} type="text" name="message" id="message" />
        {charLength}
      </div>
    );
  }
}

export default TwitterMessage;
// this.props.maxChars