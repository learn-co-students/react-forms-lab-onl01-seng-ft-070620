import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    const charsLeft = (this.props.maxChars - this.state.message.length)
    const charMessage = `${charsLeft} characters left. `
    return (

      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.message} />
        {charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
