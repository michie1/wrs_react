import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {AppContainer as App} from './Components/App.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {List, Map, fromJS} from 'immutable';
import {reducer} from './reducer';
import {fetchRider} from './actionCreators';
import io from 'socket.io-client';
import thunkMiddleware from 'redux-thunk'

let initialState = Map();

let beginState = {
  rider: {
    name: 'lege name',
    licence: '',
  },
  results: []
};

//let store = createStore(reducer, initialState);
let store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware));

store.dispatch({
  type: 'SET_STATE',
  state: beginState
});

//store.dispatch(fetchRider());

const socket = io('http://localhost:8090');

/*
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

*/

/*

*/

(function (store, socket) {
  ReactDOM.render(
    <Provider store={store}>
      <App socket={socket} />
    </Provider>,
    document.getElementById('app')
  )
})(store, socket);


/*
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))
*/
