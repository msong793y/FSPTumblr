import { connect } from 'react-redux';
import React from 'react';
import { createComment } from '../../actions/post_actions';
import CommentForm from './comment_post';
import {closeModal} from '../../actions/modal_actions'
import {fetchPosts} from '../../actions/post_actions'


const mapStateToProps = (state) => {
  return {
    userId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(createComment(user)),
    closeModal: () => dispatch(closeModal()),
    fetchPosts: ()=>dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
