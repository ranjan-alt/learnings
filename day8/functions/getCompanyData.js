const getCompanyData = async (id) => {
  const newId = id * 10;

  const myPormise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newId);
    }, 1000);
  });

  return myPormise;
  //   res.status(200).json({ message: "succes", data: data });
};

module.exports = { getCompanyData };
