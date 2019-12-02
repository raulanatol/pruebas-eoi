const initialState = { value: 10 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + action.delta };
    case 'DECREMENT':
      return { ...state, value: state.value - action.delta };
    default:
      return state;
  }
};

