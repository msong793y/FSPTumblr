import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      author_id: this.props.currentUser,
      body: "",
      hastag: "",
      photoFile: null,
      photoUrl: null
    };
  }

  handleInput(field) {
    this.setState({[field]: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[author_id]', this.state.author_id);
    if (this.state.photoFile) {

      formData.append('post[content]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
    .then(this.props.fetchPosts())
    // .then(this.props.closeModal())

    
  }

  render() {
    console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="post-body">Body of Post</label>
        <input type="text"
          id="post-body"
          value={this.state.body}
          onChange={this.update("body")}/>
        <input type="file"
          onChange={this.handleFile.bind(this)}/>
        <h3>Image preview </h3>
        {preview}
        <button>Make a new Post!</button>
      </form>
    );
  }
}
