const isAdmin = async (req, res, next) => {
  try {
    /*if (req.body?.key !== process.env.ADMIN)
      return res
        .status(200)
        .json({ message: "You are not permitted to perform this operation.", data: [] });
    else*/
      next();
  } catch (error) {
    console.log(error.name);
    console.log(error);
    res.status(401).json({ message: "Please try after login" });
  }
};

module.exports = isAdmin;
