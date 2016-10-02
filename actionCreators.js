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

export function setRiderState(rider) {
  return {
    type: 'SET_RIDER_STATE',
    rider: rider
  };
};

export function fetchRider() {
  return function (dispatch) {
    return new Promise((resolve) => {
      dispatch(setRiderState({
        name: 'Michiel',
        licence: 'Elite'
      }));
      resolve();
    });
  }
}

