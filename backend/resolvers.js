const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {},
  Mutation: {
    signup: async (_, args) => {
      try {
        const { name, email, password } = args;

        const user = await User.findOne({ email });
        if (user) {
          throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
        await newUser.save();
        newUser.password = undefined;

        const token = jwt.sign(
          {
            _id: newUser._id,
          },
          'IAMBATMAN',
          {
            expiresIn: '7d',
          }
        );

        return {
          token,
          user: newUser,
        };
      } catch (error) {
        throw new Error(error);
      }
    },
    login: async (_, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('No user found');
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new Error('Invalid Password');
      }

      user.password = undefined;

      const token = jwt.sign(
        {
          _id: user._id,
        },
        'IAMBATMAN',
        {
          expiresIn: '7d',
        }
      );

      return { token, user };
    },
  },
};

module.exports = resolvers;
