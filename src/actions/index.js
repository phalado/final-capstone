const addUsers = user => ({
  type: 'ADD_USERS',
  user,
});

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

const changeWeek = week => ({
  type: 'CHANGE_WEEK',
  week,
});

export {
  addUsers, login, logout, updateUser, addInstructor, addClass, editClass, removeClass, changeWeek,
};
