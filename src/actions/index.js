// const createUser = user => ({
//   type: 'CREATE_USER',
//   user,
// });

const login = user => ({
  type: 'LOGIN',
  user,
});

const logout = () => ({
  type: 'LOGOUT',
});

const updateUser = user => ({
  type: 'UPDATE_USER',
  user,
});

// const createInstructor = instructor => ({
//   type: 'CREATE_INSTRUCTOR',
//   instructor,
// });

const addInstructor = instructor => ({
  type: 'ADD_INSTRUCTOR',
  instructor,
});

const addClass = classy => ({
  type: 'ADD_CLASS',
  classy,
});

const editClass = classy => ({
  type: 'EDIT_CLASS',
  classy,
});

const removeClass = classy => ({
  type: 'REMOVE_CLASS',
  classy,
});

export {
  login, logout, updateUser, addInstructor, addClass, editClass, removeClass,
};
