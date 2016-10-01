import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {AppContainer as App} from './Components/App.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {List, Map, fromJS} from 'immutable';
import {reducer} from './reducer';
import io from 'socket.io-client';

let initialState = Map();

let beginState = {
  rider: {
    name: '',
    licence: '',
  },
  results: []
};

let store = createStore(reducer, initialState);
const socket = io('http://localhost:8090');

socket.on('state', state => {
 console.log('state', state); 
 store.dispatch({
   type: 'SET_STATE',
   state: state
 });
});

socket.on('action', state => {
 console.log('action', state); 
});

store.dispatch({
  type: 'SET_STATE',
  state: beginState
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)


/*
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))
*/
