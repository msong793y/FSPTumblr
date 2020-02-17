import React from 'react';
import { Link } from 'react-router-dom';



class PostingModal extends React.Component {

    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div>
                
                    <div className="ModalPostBarIcons">
                    <div className="ModalextButtonContainer Clickable">
                        <img src="/icons8-font-size-80.png" className= "ModalTextButton Clickable"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    <div className="ModalPhotoButtonContainer Clickable">
                            <img src="/CameraBlue.png" 
                            className= "ModalPhotoButton"
                            onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    <div className="ModalQuoteButtonContainer Clickable">
                            <img src="/quote-blue.png" className= "ModalQuoteButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    <div className="ModalLinkButtonContainer Clickable">
                            <img src="/link-blue.png" className= "ModalLinkButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    <div className="ModalAudioButtonContainer Clickable">
                            <img src="/audio-blue.png" className= "ModalAudioButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    <div className="ModalVideoButtonContainer Clickable">
                            <img src="/video-blue.png" className= "ModalVideoButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default PostingModal;