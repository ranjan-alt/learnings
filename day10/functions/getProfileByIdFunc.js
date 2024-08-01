const profileData = [
  {
    id: 1,
    name: "ranjan",
  },
  { id: 2, name: "kumar" },
];

const getProfileById = (id) => {
  const data = profileData.filter((profile) => {
    if (id == profile.id) {
      return true;
    }
  });
  return data;
};
module.exports = { getProfileById };
