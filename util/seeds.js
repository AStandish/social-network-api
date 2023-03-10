const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { users } = require('./data.js');

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({})
    await User.insertMany(users)
    const createdUsers = await User.find()
    const updatedUser = await User.findOneAndUpdate({ username: "Phoebe" }, { $addToSet: { friends: createdUsers[1]._id } }, { new: true })
    console.log(updatedUser)
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  