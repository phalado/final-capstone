const signedUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return ([...state,
        {
          id: action.user.id,
          name: action.user.name,
        },
      ]);
    default:
      return state;
  }
};

export default signedUsersReducer;
