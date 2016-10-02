import {List, Map, fromJS} from 'immutable';

export function setRiderName(name) {
  return name;
}

export function setState(state, newState) {
  return state.merge(newState);
}


export function setRiderState(rider) {
  return Map(rider);
}

export function reducer(state, action) {
  if (action.type === 'toEnglish') {
    return state.set(action.index, 'bye');
  } else if (action.type === 'SET_NAME') {
    return state.updateIn(['rider', 'name'], () => setRiderName(action.name));
  } else if (action.type === 'SET_STATE') {
    return setState(state, action.state);
  } else if (action.type === 'SET_RIDER_STATE') {
    return state.update('rider', () => setRiderState(action.rider));
  } else {
    return state;
  }
}


