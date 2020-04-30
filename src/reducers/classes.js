const classesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CLASS':
      return ([...state,
        {
          id: action.classy.id,
          classTime: action.classy.classTime,
          instructor: action.classy.instructor_id,
          user: action.classy.user_id,
          status: action.classy.status,
        }]);
    case 'REMOVE_CLASS':
      return state.filter(classy => classy.id !== action.classy);
    default:
      return state;
  }
};

export default classesReducer;
