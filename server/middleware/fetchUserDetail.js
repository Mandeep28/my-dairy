const jwt = require("jsonwebtoken");
const customError = require("../errors/customError");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");


const fetchUser =async (req, res, next) => {

  const token = req.header("auth-token");
  if (!token) {
   throw new customError(`no token found`, StatusCodes.UNAUTHORIZED);
  }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({_id : data.userid});
    if(!user) {
      throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
    }
    req.user = user;
    next();
 
};

module.exports = fetchUser;
