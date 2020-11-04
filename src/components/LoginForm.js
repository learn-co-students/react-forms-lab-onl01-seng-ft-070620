import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateLogin = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formSubmit = event => {
    event.preventDefault()
    this.state.username != "" && this.state.password != "" ? this.props.handleLogin(this.state) : null
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateLogin} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updateLogin} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
