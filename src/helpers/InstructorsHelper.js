const getSingleInst = (instructors, path) => {
  const querry = window.location.href.split(`${path}/`)[1];

  let instructor = instructors.filter(inst => inst.id === parseInt(querry, 10))[0];
  if (!instructor) {
    instructor = {
      id: '',
      name: '',
      instImage: '',
      dragonName: '',
      dragonType: '',
      dragonImage: '',
    };
  }

  return instructor;
};

export default getSingleInst;
