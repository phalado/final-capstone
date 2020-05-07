const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return ({
        logged: true,
        id: action.user.id,
        name: action.user.name,
        email: action.user.email,
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
        id: action.user.id,
        name: action.user.userName,
        email: action.user.userEmail,
      });
    default:
      return state;
  }
};

export default userReducer;
