import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './Components/App.jsx';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { List, Map } from 'immutable';

/*
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
*/

let wrsApp = (state, action) => {
  if (action.type === 'toEnglish') {
    return state.set(action.index, 'bye');
  }
  return state;
}

let initialState = Map({
  hoi: 'doei'
});

let store = createStore(wrsApp, initialState);

console.log(store.getState().get('hoi'));
store.dispatch({
  type: 'toEnglish',
  index: 'hoi'
});

console.log(store.getState().get('hoi'));

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
