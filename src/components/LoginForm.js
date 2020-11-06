import React from "react"

export default class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {username: '', password: ''}
  }

  handleUsername = event => {
    this.setState({username: event.target.value})
  }

  handlePassword = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state)
      this.setState({username: '', password: ''})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              onChange={this.handleUsername}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }

}
