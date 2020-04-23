const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return ({
        id: action.id,
        name: action.name,
        email: action.email,
      });
    case 'LOGOUT':
      return ({
        id: 0,
        name: '',
        email: '',
      });
    case 'UPDATE_USER':
      return ({
        id: action.id,
        name: action.name,
        email: action.email,
      });
    default:
      return state;
  }
};

export default userReducer;
