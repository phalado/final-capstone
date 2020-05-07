const instructorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INSTRUCTOR':
      return ([...state,
        {
          id: action.instructor.id,
          name: action.instructor.name,
          instImage: action.instructor.instImage,
          dragonName: action.instructor.dragonName,
          dragonType: action.instructor.dragonType,
          dragonImage: action.instructor.dragonImage,
        }]);
    default:
      return state;
  }
};

export default instructorsReducer;
