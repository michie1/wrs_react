function rename(state, name) {
    if (name === undefined) {
      return state.setIn(['rider', 'name'], 'undefined');
    } else {
      return state.setIn(['rider', 'name'], name);
    }
}

export function reducer(state, action) {
  if (action.type === 'toEnglish') {
    return state.set(action.index, 'bye');
  } else if (action.type === 'rename') {
    return rename(state, action.name);
  } else if (action.type === 'setState') {
    return setState(state, action.state);
  } else {
    return state;
  }
}

export function setState(state, newState) {
  return state.merge(newState);
}

