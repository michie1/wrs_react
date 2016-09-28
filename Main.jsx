import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {AppContainer} from './Components/App.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {List, Map} from 'immutable';

/*
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
*/

let reducer = (state, action) => {
  if (action.type === 'toEnglish') {
    return state.set(action.index, 'bye');
  } else if (action.type === 'rename') {
    if (action.name === undefined) {
      return state.set('name', 'foobar');
    } else {
      return state.set('name', action.name);
    }
  } else {
    return state;
  }
}

let initialState = Map({
  hoi: 'doei',
  name: 'Mich'
});

let store = createStore(reducer, initialState);

console.log(store.getState().get('hoi'));
store.dispatch({
  type: 'toEnglish',
  index: 'hoi'
});

console.log(store.getState().get('hoi'));



ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
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
