function setRiderName(name) {
  return name;
}

export function reducer(state, action) {
  if (action.type === 'toEnglish') {
    return state.set(action.index, 'bye');
  } else if (action.type === 'SET_NAME') {
    return state.updateIn(['rider', 'name'], () => setRiderName(action.name));
  } else if (action.type === 'SET_STATE') {
    return setState(state, action.state);
  } else {
    return state;
  }
}

export function setState(state, newState) {
  return state.merge(newState);
}

