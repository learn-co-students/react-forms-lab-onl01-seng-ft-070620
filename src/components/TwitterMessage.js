// controlled component tracks user input and remaining chars
import React from "react"

export default class TwitterMessage extends React.Component {
  constructor() {
    super()
    this.state = {tweet: ''}
  }

  handleTyping = event => {
    this.setState({tweet: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          value={this.state.tweet}
          onChange={this.handleTyping}
        /><br></br>
        Remaining chars: {this.props.maxChars - this.state.tweet.length}
      </div>
    )
  }

}
