// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
  }

  recordusername = event => {
    this.setState({username: event.target.value})
  }

  recordpassword = event => {
    this.setState({password: event.target.value})
  }

  getUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Username"
          onChange={this.recordusername}
          value={username}
        />
      </div>
    )
  }

  getPasswordField = () => {
    const {password} = this.state

    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
          onChange={this.recordpassword}
          value={password}
        />
      </div>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  verifyLoginDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log('Response', response)
    console.log('Data', data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      const errorMessage = `*${data.error_msg}`

      this.setState({errorText: errorMessage})
    }
  }

  render() {
    const {errorText} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <form className="login-form" onSubmit={this.verifyLoginDetails}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          {this.getUsernameField()}
          {this.getPasswordField()}
          <button className="submit-button" type="submit">
            Login
          </button>
          <p className="error-text">`{errorText}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
