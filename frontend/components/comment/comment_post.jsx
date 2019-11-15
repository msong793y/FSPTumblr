import React from 'react';



class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      post_id: this.props.content,
      author_id: this.props.userId
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
    const comment = Object.assign({}, this.state);
    this.props.processForm(comment)
    .then(this.props.fetchPosts())
    .then(this.props.closeModal())
    setTimeout(this.props.fetchPosts,1000)
  }

//   renderErrors() {
//     return(
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }

  
//   componentWillUnmount(){
//     this.props.clearErrors();
//   }

  render() {
    
    return (
      <div className="Comment-form-container">
        <div className= "CommentFormTitle" >
            <button>Comment Form</button>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* {this.renderErrors()} */}
          <div className="login-form">
          
            <label className="loginInputContainer">
              <input type="text"
                value={this.state.body}
                onChange={this.update('body')}
                className="comment-input"
                placeholder="Comment"
              />
            </label>
          
            <input className="login-submit" type="submit" value="Post Comment" />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
