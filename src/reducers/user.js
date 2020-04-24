const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return ({
        logged: true,
        id: action.id,
        name: action.name,
        email: action.email,
      });
    case 'LOGOUT':
      return ({
        logged: false,
        id: 0,
        name: '',
        email: '',
      });
    case 'UPDATE_USER':
      return ({
        logged: true,
        id: action.id,
        name: action.name,
        email: action.email,
      });
    default:
      return state;
  }
};

export default userReducer;
