const instructorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INSTRUCTOR':
      return ([...state,
        {
          id: action.id,
          name: action.name,
          instImage: action.instImage,
          dragonName: action.dragonName,
          dragonType: action.dragonType,
          dragonImage: action.dragonImage,
        }]);
    default:
      return state;
  }
};

export default instructorsReducer;
