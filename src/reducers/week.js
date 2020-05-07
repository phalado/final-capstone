const weekReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_WEEK':
      return state + action.week;
    default:
      return state;
  }
};

export default weekReducer;
