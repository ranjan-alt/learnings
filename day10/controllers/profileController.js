const { getProfileById } = require("../functions/getProfileByIdFunc");

const profileController = (req, res) => {
  try {
    const { id } = req.params;
    const convertToInteger = parseInt(id);
    const profile = getProfileById(convertToInteger);
    res.status(200).json({ message: "succcess", data: profile });
  } catch (err) {
    res.send({ message: err });
  }
};

module.exports = { profileController };
