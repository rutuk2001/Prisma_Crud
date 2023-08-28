const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const User = await prisma.User.create({
      data: {
        username,
        email,
        password,
      },
    });
    cookieToken(User, res);
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      throw new Error("enter valid");
    }
    const user = await prisma.User.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("not registered");
    }

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};
//logout user
const userLogout = (req, res, next) => {
  try {
    res.clearCookie("token");
    console.log(req.body);
    res.send({
      Success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const user = await prisma.User.delete({
      where: {
        email,
      },
    });
    res.send({
      Success: "Deleted",
    });
  } catch (error) {
    throw new Error(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { email, username } = req.body;
    const user = await prisma.User.update({
      where: {
        email,
      },
      data: {
        username: username,
      },
    });
    res.send({
      Success: "Updated",
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { signup, login, userLogout, deleteUser, updateUser };
