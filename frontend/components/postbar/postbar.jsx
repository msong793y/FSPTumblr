import React from 'react';
import { Link } from 'react-router-dom';



class PostBar extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
          <div>
            <div className="PostBarMain Clickable">
              <div className="PostBarProfilePic " onClick={()=>this.props.fetchPosts()}>
                <img
                  src="/default_profile_pic.png"
                  className="TextButton"
                ></img>
              </div>
              <div className="PostBarIcons ">
                <div className="TextButtonContainer">
                  <img
                    src="/icons8-font-size-80.png"
                    className="TextButton"
                    onClick={() =>
                      this.props.activateModal("createPost", "text")
                    }
                  ></img>
                </div>
                <div className="PhotoButtonContainer">
                  <img
                    src="/icons8-slr-camera-64.png"
                    className="PhotoButton"
                    onClick={() =>
                      this.props.activateModal("createPost", "photo")
                    }
                  ></img>
                </div>
                <div className="QuoteButtonContainer">
                  <img
                    src="/quote-orange.png"
                    className="QuoteButton"
                    onClick={() =>
                      this.props.activateModal("createPost", "quote")
                    }
                  ></img>
                </div>
                <div className="LinkButtonContainer">
                  <img
                    src="/link-green.png"
                    className="LinkButton"
                    onClick={() =>
                      this.props.activateModal("createPost", "link")
                    }
                  ></img>
                </div>
                <div className="AudioButtonContainer">
                  <img
                    src="/audio-purple.png"
                    className="AudioButton"
                    onClick={() =>
                      this.props.activateModal("createPost", "audio")
                    }
                  ></img>
                </div>
                <div className="VideoButtonContainer">
                  <img
                    src="/video-pink-64.png"
                    className="VideoButton"
                    onClick={() =>
                      this.props.activateModal("createPost", "video")
                    }
                  ></img>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PostBar;