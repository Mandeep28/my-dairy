// External packages
const crypto = require("crypto");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

// Custom Error
const customError = require("../errors/customError");

// send mail module
const sendVerificationEmail = require("../mail/sendVerificationEmail");
const sendResetPassswordEmail = require("../mail/sendResetPasswordEmail");

// DB models
const User = require("../models/User");

// Client Url
const origin = "http://localhost:3000"; 

// ------------------------- REGISTER USER (SIGN UP) -------------------
const register = async (req, res) => {
  const {  name, email, password } = req.body;

  //   check if user is already present or not in User model
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new customError("Email Already Exist", StatusCodes.BAD_REQUEST);
  }
  var role = "";
  const isFirstAccount = (await User.countDocuments({})) === 0;
  if (isFirstAccount) {
    role = "admin";
  } else {
   role = "user";
  }

  const verificationToken = crypto.randomBytes(40).toString("hex");
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  });

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  res.status(StatusCodes.CREATED).json({
    msg: "Success! Please check your email to verify account",
  });
};

// ------------------- VERIFY EMAIL -----------------------------------
const verifyEmail = async (req, res) => {
  const { token, email } = req.body;
  //   check if user is already present or not in User model
  const findUser = await User.findOne({ email });
  if (!findUser) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  if (findUser.isVerified) {
    res.status(StatusCodes.OK).json({ msg: "Email Already verified" });
    return;
  }
  if (token !== findUser.verificationToken) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  findUser.isVerified = true;
  findUser.verified = Date.now();
  findUser.verificationToken = "";

  await findUser.save();

  res.status(StatusCodes.OK).json({ msg: "Email Verified" });
}

/**
 * Login
 * @param {*} req 
 * @param {*} res 
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  //   check if user is already present or not in User model
  const findUser = await User.findOne({ email });
  if (!findUser) {
    throw new customError(
      "Please Provide correct credentials",
      StatusCodes.UNAUTHORIZED
    );
  }
  const isPasswordMatch = await findUser.comparePassword(password);
  if (!isPasswordMatch) {
    throw new customError(
      "Please Provide correct credentials",
      StatusCodes.UNAUTHORIZED
    );
  }
  if (!findUser.isVerified) {
    throw new customError("Please Verify Your Email", StatusCodes.BAD_REQUEST);
  }
  const token = await findUser.createJWT();
  res.status(StatusCodes.OK).json({
    token,
    msg: "login successfully"
  });
};


// ----------------------- RESET PASSWORD MAIL REQUREST SEND --------------------------------------
const resetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new customError(
      `Email must be required`,
      StatusCodes.BAD_REQUEST
    );
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new customError(  `No account found with ${email}`, StatusCodes.UNAUTHORIZED);
  }
  const passwordToken = crypto.randomBytes(70).toString("hex");
  // send email
  await sendResetPassswordEmail({
    name: user.name,
    email: user.email,
    token: passwordToken,
    origin,
  });

  const tenMinutes = 1000 * 60 * 10;
  const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);
  user.passwordToken = passwordToken;
  user.passwordTokenExpirationDate = passwordTokenExpirationDate;
  user.save();
  // console.log(passwordToken);
  res
    .status(StatusCodes.OK)
    .json({ msg: "Please check your email for reset password link" });
};



//  ----------------------- RESET PASSWORD ---------------------------------------
const forgotPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new customError("Please provide all values", StatusCodes.BAD_REQUEST);
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }

  const currentDate = new Date();

  if (
    user.passwordToken === token &&
    user.passwordTokenExpirationDate > currentDate
  ) {
    user.password = password;
    user.passwordToken = null;
    user.passwordTokenExpirationDate = null;
    await user.save();
  } else {
    throw new customError(
      "Reset password Link expired.",
      StatusCodes.UNAUTHORIZED
    );
  }
  res.status(StatusCodes.OK).json({ msg: "Password Reset successfully. You can now login to your account." });
};

//  ----------------------- SEND USER DETAIL TO THAT USER ONLY ---------------------------
const getUserDetail = async (req, res) => {
  const token = req.header("auth-token");
  if (!token) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  let data = jwt.verify(token, process.env.JWT_SECRET);
  const id = data.userid;
  const findUser = await User.findOne({ _id: id });

  if (!findUser) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }

  res.status(StatusCodes.OK).json({ details: findUser });
};



//  --------------------- UPDATE USER PROFILE ------------------------------------
const updateProfile = async (req, res) => {
  const token = req.header("auth-token");
  if (!token) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  let data = jwt.verify(token, process.env.JWT_SECRET);
  const id = data.userid;
  const userData = await User.findOne({ _id: id });
  if (!userData) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  const { image, name } = req.body;
  // console.log("iamge is ", image, "name is : ", name);
  
  if(!image || !name) {
    throw new customError("Please provide all values", StatusCodes.BAD_REQUEST);
  }


  const user = await User.findOneAndUpdate(
    { _id: userData._id },
    {
      image,
      name,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ details: user, msg: "Details update successfully" });
};



// --------------------- CHANGE PASSWORD WHEN USER IS LOGGED IN ---------------------------------
const changePassword = async (req, res) => {
  const token = req.header("auth-token");
  if (!token) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  let data = jwt.verify(token, process.env.JWT_SECRET);
  const id = data.userid;
  const userData = await User.findOne({ _id: id });
  if (!userData) {
    throw new customError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }

  const { oldpassword, password } = req.body;
  if(!oldpassword || !password) {
    throw new customError("Please provide all values", StatusCodes.BAD_REQUEST);
  }

  //  check if old password match or not
  const isPasswordMatch = await userData.comparePassword(oldpassword);
  if (!isPasswordMatch) {
    throw new customError(
      "Please Provide correct credentials",
      StatusCodes.UNAUTHORIZED
    );
  }
  //  change the password 
  userData.password = password;
  await userData.save();
  res.status(StatusCodes.OK).json({ msg: "Password change successfully" });
};



module.exports = {
  register,
  login,
  getUserDetail,
  verifyEmail,
  resetPassword,
  forgotPassword,
  updateProfile,
  changePassword
};
