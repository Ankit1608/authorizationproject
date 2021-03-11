const { Users } = require("./models/User");
const { hash, compare } = require("bcryptjs");
const { createAccessToken, createRefeshToken } = require("./auth");
const { sendRefreshToken } = require("./sendRefreshToken");

const resolvers = {
  Query: {
    hello: () => "wassap",
    users: () => Users.find(),
    user: (_, { id }) => Users.findById(id),
    bye: () => {
      return "bye";
    },
    me: () => "me",
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      const hashedPassword = await hash(password, 12);
      const User = new Users({ email, password: hashedPassword });
      try {
        await User.save();
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },

    login: async (_, { email, password }, { res }) => {
      const User = await Users.findOne({ email: email });
      if (!User) {
        throw new Error("could not find the user");
      }
      const valid = await compare(password, User.password);
      if (!valid) {
        throw new Error("bad password");
      }

      //login succesfull
      sendRefreshToken(res, createRefeshToken(User));
      return { accessToken: createAccessToken(User), user: User };
    },
    logout: async (_, {}, { res }) => {
      console.log(res);
      sendRefreshToken(res, " ");
      return true;
    },

    revokeRefreshToken: async (_, { userId }) => {
      const User = await Users.findByIdAndUpdate(userId, {
        $inc: { tokenVersion: 1 },
      });
      if (!User) {
        throw new Error("could not find the user");
      }
      return true;
    },
  },
};
module.exports = { resolvers };
// $inc: { tokenVersion: 1 }
// const User = await Users.findOneAndUpdate(
//   { id: userId },
//   { email: "boob@boob.com" },
//   { new: true, useFindAndModify: false },
//   (err, data) => {
//     if (err) console.log(err);
//     if (data) console.log(data);
//   }
// );
// if (!User) return false;
// return true;
