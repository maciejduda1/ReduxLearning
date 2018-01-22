import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.js';
import {addComment} from './actions.js';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
console.log((text) => store.dispatch(addComment(text)));
console.log('actions: ' + addComment);
console.log('stan: ' + store.getState());
store.dispatch(addComment('Juventus Torino is the best!'));
store.dispatch(addComment('Legia Pany! :) '));

registerServiceWorker();

//export {thumbUpComment, thumbDownComment, removeComment, editComment};