import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {AppContainer} from './Components/App.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {List, Map} from 'immutable';
import {reducer} from './reducer';

let initialState = Map({
  hoi: 'doei',
  name: 'Mich',
  rider: {
    name: 'Michiel',
    licence: 'Elite',
  },
  results: [{
    race: {
      name: 'Ronde van de Lier',
    },
    result: '12',
  }, {
    race: {
      name: 'Ronde van de Race',
    },
    result: '21',
  }]
});

let store = createStore(reducer, initialState);

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
