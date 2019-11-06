import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password',
      email:'Email'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container" >
        <form onSubmit={this.handleSubmit} className="signup-form-box">
              {this.renderErrors()}
          <div className="SignInLinkButton">
                {this.props.navLink}
          </div>
          <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-login"
              />
          </label>
          <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-login"
              />
          </label>
          <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-login"
              />
          </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            
        </form>
      </div>
    );
  }
}

export default SignupForm;
