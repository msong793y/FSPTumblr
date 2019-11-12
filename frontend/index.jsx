import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, updateLocation } from './actions/session_actions';
import {fetchPosts} from './actions/post_actions'



document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore()
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.updateLocation=updateLocation
  window.fetchPosts=fetchPosts;

  ReactDOM.render(<Root store={store}/>, rootEl);
}); 