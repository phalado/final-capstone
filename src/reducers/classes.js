const classesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CLASS':
      return ([...state,
        {
          id: action.id,
          classTime: action.classTime,
          instructor: action.instructor_id,
          user: action.user_id,
          status: action.status,
        }]);
    case 'REMOVE_CLASS':
      return state.filter(classy => classy.id !== action.id);
    default:
      return state;
  }
};

export default classesReducer;
