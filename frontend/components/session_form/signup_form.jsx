import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email:''
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

  componentWillUnmount(){
    this.props.clearErrors();
  }
  componentDidMount(){
    this.props.setLocation("SignUp")
  }

  render() {
    return (
      <div className="signup-form-container" >
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="SignInLinkButton">
          {this.renderErrors()}
          </div>
          <label className="emailFieldContainer signupFC">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-login"
                placeholder="Email"
              />
          </label>
          <label className="passwordFieldContainer signupFC">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-login"
                placeholder="Password"
              />
          </label>
          <label className="usernameFieldContainer signupFC">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-login"
                placeholder="Username"
              />
          </label>
          
            <input className="session-submit" type="submit" value={this.props.formType} />
         
        </form>
      </div>
    );
  }
}

export default SignupForm;
