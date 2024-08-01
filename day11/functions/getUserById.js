const userData = [
  {
    id: 1,
    name: "user1",
  },
  { id: 2, name: "user2" },
];

const getUserById = (id) => {
  const data = userData.filter((user) => {
    if (id == user.id) {
      return true;
    }
  });
  return data;
};
module.exports = { getUserById };
