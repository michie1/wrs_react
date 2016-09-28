function rename(state, name) {
    if (name === undefined) {
      return state.set('name', 'foobar');
    } else {
      return state.set('name', name);
    }
}

export function reducer(state, action) {
  if (action.type === 'toEnglish') {
    return state.set(action.index, 'bye');
  } else if (action.type === 'rename') {
    return rename(state, action.name);
  } else {
    return state;
  }
}
