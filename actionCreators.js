export function rename(name) {
  return {
    type: 'rename',
    name: name
  };
}

export function setState(state) {
  return {
    type: 'setState',
    state: state
  };
}
