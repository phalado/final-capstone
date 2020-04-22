const login = user => ({
  type: 'LOGIN',
  id: user.id,
  name: user.name,
  email: user.email,
  classes: user.classes,
});

const logout = () => ({
  type: 'LOGOUT',
  id: 0,
  name: '',
  email: '',
  classes: [],
});

const updateUser = user => ({
  type: 'UPDATE_USER',
  id: user.id,
  name: user.name,
  email: user.email,
  classes: user.classes,
});

const addInstructor = instructor => ({
  type: 'ADD_INSTRUCTOR',
  name: instructor.name,
  dragonType: instructor.dragonType,
  dragonName: instructor.dragonName,
  image: instructor.image,
  dragonImage: instructor.dragonImage,
  classes: instructor.classes,
});

export { login, logout, updateUser, addInstructor };
