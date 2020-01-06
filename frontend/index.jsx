import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';




document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore()
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.updateLocation=updateLocation
  // window.fetchPosts=fetchPosts;

  ReactDOM.render(<Root store={store}/>, rootEl);
}); 