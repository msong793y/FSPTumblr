import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.contentType)
    this.state = {
      author_id: this.props.currentUser,
      body: "",
      hashtags: this.props.contentType,
      contentFile: null,
      contentUrl: null
    };
  }


  handleInput(field) {
    this.setState({ [field]: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({ contentFile: file, contentUrl: fileReader.result });
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
    if (this.state.contentFile) {

      formData.append('post[content]', this.state.contentFile);
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
    setTimeout(this.props.fetchPosts, 1000)


  }

  render() {

    let button1 = null;


    switch (this.state.hashtags) {
      case "text":
        button1 = (
          <div className="OptionalPostFormContainer">
            You say:
          </div >
        )
        break;
      case "photo":

        button1 = (
          <div className="OptionalPostFormContainer">
            <input type="file" className="PhotoFileUpload"
              onChange={this.handleFile.bind(this)} />
          </div >
        )
        break;

      case "quote":

        break;

      case "link":

        break;

      case "audio":

        break;
      case "video":

        break;


      default:
        break;
    }
    // debugger
    const preview = this.state.contentUrl ? <img src={this.state.contentUrl} /> : null;
    // switch (this.state.hashtags) {
    //   case "text":

    //     break;
    //   case "photo":

    //     button1 = (
    //       <div className="PhotoInputHashtagsContainer">
    //         <input type="file" className="PhotoFileUpload"
    //           onChange={this.handleFile.bind(this)} />
    //       </div >
    //     )
    //     break;

    //   case "quote":

    //     break;

    //   case "link":

    //     break;

    //   case "audio":

    //     break;
    //   case "video":

    //     break;


    //   default:
    //     break;
    // }



    return (
      <div className="PhotSubmissionFormContainer">
        <div>
          <div className="PhotoSubmissionFormAvator">
            <img src="/default_profile_pic.png" className="PhotoFormProfilePic" />
          </div>
        </div>
        <div className="PhotoSubmitFormContainer">
          <form className="PhotoSubmitForm" onSubmit={this.handleSubmit.bind(this)}>
            <div className="UserNameDisplayContainer">
              <div className="UserNameDisplay">
                {this.props.username}
              </div>
            </div>
            {button1}
            <div className="PhotoInputTextContainer">
              <input className="PhotoInputText" type="text"
                id="post-body"
                placeholder="Your Text Here"
                value={this.state.body}
                onChange={this.update("body")} />
            </div >

            <div className="ImagePreviewContainer">
              {preview}
            </div>

            <div className="PhotSubmitFormButtonContainer">
              <button className="PhotSubmitFormButton">Submit</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}
