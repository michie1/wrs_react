export function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state: state
  };
}
