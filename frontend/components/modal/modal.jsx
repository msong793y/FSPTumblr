import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostContainer from '../post/create_post_form_container'
import PostingModalContainer from '../postingModal/postingModal_container';
import ShowContent from '../feed/show_content';
import CommentPostContainer from "../comment/comment_post_container";
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, content, closeModal}) {
  
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    
    case 'createPost':
      component = <CreatePostContainer/>;
      break;
    case 'postingModal':
      component = <PostingModalContainer />;
      break;
    case 'showContent':
      component= <ShowContent content={content} />
      break;
    case 'postComment':
      component = <CommentPostContainer content={content}/>
      break;
    // case 'signup':
    //   component = <SignupFormContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal.modal,
    content: state.modal.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
