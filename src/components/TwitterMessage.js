import React, {Component} from "react";

class TwitterMessage extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      maxChars: this.props.maxChars,
      tweetLength: 0
    };
  }

  handleTweetChange = (e) => {
    this.setState({
      input: e.target.value,
      tweetLength: e.target.value.length
    })
  }
  
  charsLeft() {
    return this.state.maxChars - this.state.tweetLength
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleTweetChange} value={this.state.input} type="text" name="message" id="message" />
        <p>{this.charsLeft()} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
