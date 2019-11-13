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
                        <div className="ModalextButtonContainer">
                            <img src="/icons8-font-size-80.png" className= "ModalTextButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                        <div className="ModalPhotoButtonContainer">
                            <img src="/CameraBlue.png" 
                            className= "ModalPhotoButton"
                            onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                        <div className="ModalQuoteButtonContainer">
                            <img src="/quote-blue.png" className= "ModalQuoteButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                        <div className="ModalLinkButtonContainer">
                            <img src="/link-blue.png" className= "ModalLinkButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                        <div className="ModalAudioButtonContainer">
                            <img src="/audio-blue.png" className= "ModalAudioButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                        <div className="ModalVideoButtonContainer">
                            <img src="/video-blue.png" className= "ModalVideoButton"
                             onClick={ ()=>this.props.activateModal("createPost",null)}></img>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default PostingModal;