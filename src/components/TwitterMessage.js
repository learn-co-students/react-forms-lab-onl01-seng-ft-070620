import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    }
  }

  inputChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    let charRemaining = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.inputChange} value={this.state.tweet} />
        <p>{this.state.tweet}</p>
        <p>Tweet Length:{charRemaining}</p>
      </div>
    )
  }
}

export default TwitterMessage;
