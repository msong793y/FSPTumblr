
import React, { useCallback } from "react";
import AudioPlayer from "react-h5-audio-player";
import Dropzone from "react-dropzone";
import { getAllPosts, GET_ALL_POSTS} from "../../actions/post_actions"



export default class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.contentType)
    this.state = {
      author_id: this.props.currentUser,
      body: "",
      hashtags: this.props.contentType,
      op_name: "",
      contentFile: null,
      contentUrl: null,
      private: "false"
    };
  }


  handleInput(field) {
    this.setState({ [field]: e.currentTarget.value });
  }

  handleFile(files) {
    const file = files[0];
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
    formData.append('post[private]',this.state.private);
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
      .then(posts => (dispatch(getAllPosts(posts))))
      .then(this.props.closeModal())
    // setTimeout(this.props.fetchPosts(), 500)
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
            <Dropzone onDrop={acceptedFiles => this.handleFile(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <div className="Drop-Zone" Drop-Zone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="Drop-Zone-Photo_Inher">
                    Drag and drop a Photo here, or click to select Photo file
                  </p>
                </div>
              )}
            </Dropzone>
          </div>
        );
        break;

      case "quote":
        button1 = (
          <div className="OptionalPostFormContainer">
            <input className="PhotoInputText QuoteTextArea" type="text"
              id="post-body"
              placeholder="Give us your quote"
              value={this.state.op_name}
              onChange={this.update("op_name")} />
          </div >
        )
        break;

      case "link":
        button1 = (
          <div className="OptionalPostFormContainer">
            <input className="PhotoInputText LinkTextArea" type="url"
              id="post-body"
              placeholder="You Link"
              value={this.state.op_name}
              onChange={this.update("op_name")} />
          </div >
        )

        break;

      case "audio":
        button1 = (
          <Dropzone onDrop={acceptedFiles => this.handleFile(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
           
                <div className="Drop-Zone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Drag and drop a Audio file here, or click to select Audio
                    file
                  </p>
                </div>
        
            )}
          </Dropzone>
        );

        break;
      case "video":
        button1 = (
          <Dropzone onDrop={acceptedFiles => this.handleFile(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
             
                <div className="Drop-Zone" Drop-Zone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Drag and drop a Video here, or click to select Video file
                  </p>
                </div>
            )}
          </Dropzone>
        );

        break;


      default:
        break;
    }
    // debugger
    let preview = null;
     if(this.state.contentUrl){
       switch (this.state.hashtags) {
         case "text":

           break;
         case "photo":

           preview = (
             <img src={this.state.contentUrl} /> 
           )
           break;

         case "quote":

           break;

         case "link":

           break;

         case "audio":
           preview = <AudioPlayer autoPlay src={this.state.contentUrl} />;
           break;

         case "video":
           preview = (
             <video controls width="250">
               <source src={this.state.contentUrl} />
             </video>
           );
           break;


         default:
           break;
       }

  
      }



    return (
      <div className="PhotSubmissionFormContainer">
        {/* <div>
          <div className="PhotoSubmissionFormAvator">
            <img
              src="/default_profile_pic.png"
              className="PhotoFormProfilePic"
            />
          </div>
        </div> */}

        <div className="PhotoSubmitFormContainer">
          <form
            className="PhotoSubmitForm"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="UserNameDisplayContainer">
              <div className="UserNameDisplay">{this.props.username}</div>
            </div>
            {button1}
            <div className="PhotoInputTextContainer">
              <input
                className="PhotoInputText"
                type="text"
                id="post-body"
                placeholder="What says you?"
                value={this.state.body}
                onChange={this.update("body")}
              />
            </div>

            <div className="PhotSubmitFormButtonContainer">
              <button
                className="PhotSubmitFormButton"
                onClick={() => this.props.closeModal()}
              >
                Cancel
              </button>
              <div className="PrivateRadio">
                Private:
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.private === "false"}
                      onChange={this.update("private")}
                    />
                    False
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.private === "true"}
                      onChange={this.update("private")}
                    />
                    True
                  </label>
                </div>
              </div>
              <button className="PhotSubmitFormButton">Submit</button>
            </div>
          </form>
        </div>
        <div className="ImagePreviewContainer">{preview}</div>
      </div>
    );
  }
}
