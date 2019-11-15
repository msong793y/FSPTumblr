import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      author_id: this.props.currentUser,
      body: "",
      hashtag: {},
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
    formData.append('post[hashtags]', this.state.hashtags);
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
    .then(this.props.closeModal())
    setTimeout(this.props.fetchPosts,1000)

    
  }

  render() {
    // debugger
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="PhotSubmissionFormContainer">
        <div>
            <div className = "PhotoSubmissionFormAvator">
                <img src="/default_profile_pic.png" className="PhotoFormProfilePic"/>
            </div>
        </div>
        <div className="PhotoSubmitFormContainer">
          <form className="PhotoSubmitForm" onSubmit={this.handleSubmit.bind(this)}>
              <div className= "UserNameDisplayContainer">
                <div className= "UserNameDisplay">
                  {this.props.username}
                </div>
              </div>
             
              <div className="PhotoInputTextContainer">
                <input className="PhotoInputText" type="text"
                  id="post-body"
                  placeholder="Your Text Here"
                  value={this.state.body}
                  onChange={this.update("body")}/>
              </div >
              <div className="PhotoInputHashtagsContainer">
                <input className="PhotoInputHashtags" type="text"
                  id="post-body"
                  placeholder="hashtags here"
                  value={this.state.hashtags}
                  onChange={this.update("hashtags")}/>
              </div > 
              <div className="ImagePreviewContainer"> 
                  {preview}
              </div> 
              <input type="file" className="PhotoFileUpload"
                onChange={this.handleFile.bind(this)}/>        
              <div className= "PhotSubmitFormButtonContainer">
                <button className= "PhotSubmitFormButton">Submit</button>
              </div>
              
            </form>
          </div>
      </div>
    );
  }
}
