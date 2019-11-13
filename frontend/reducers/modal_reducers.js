import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {modal:null, id:null}, action) {
  Object.freeze(state);
  let newState= Object.assign({},state)
  switch (action.type) {
    case OPEN_MODAL:
      newState.modal=action.modal;
      newState.id= action.info;  
      return newState;
    case CLOSE_MODAL:
      return {modal:null, id:null};
    default:
      return state;
  }
}