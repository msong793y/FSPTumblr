import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.demoLogin = this.demoLogin.bind(this);


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

  handleDemo(e){
    
        let user = "DemoUser";
        let pass = "password";
     
        this.setState({username: "", password: "" },
                    () => this.demoLogin(user,pass) );
    }


demoLogin(user,pass) {
    user = user.split("");
    pass = pass.split("");
    const _demoUser = (user) => {
        if (user.length > 0) {
            let char = user.shift();
            this.setState({ username: this.state.username + char },
                () => setTimeout(() => { _demoUser(user) }, 50)
            )
        } else {
            _demoPass(pass);
        }
    }
    const _demoPass = (pass) => {
        if (pass.length > 0) {
            let char = pass.shift();
            this.setState({ password: this.state.password + char },
                () => setTimeout(() => { _demoPass(pass) }, 50)
            )
        } else {
            const demo_user = Object.assign({}, this.state);
            this.props.processForm(demo_user);
        }
    }
    _demoUser(user);
};

  componentDidMount(){
    this.props.setLocation("SignIn")
  }
  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {
    
    return (
      <div className="login-form-container">
        <div className="DemoUserLogin" onClick={this.handleDemo}>
          <button className="DemoUserLoginButton">Demo User Login</button>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <label className="loginInputContainer">
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username"
              />
            </label>

            <label className="loginInputContainer">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="Password"
              />
            </label>

            <input
              className="login-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
