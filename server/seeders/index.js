const db = require('../config/connection');
const { Collections } = require('../models/Collections');
const { Comments } = require('../models/Comments');
const { Image } = require('../models/Image');
const { User } = require('../models/User');
const seedCollections = require('./collectionsData.json')
const seedUser = require('./userData.json');
const seedImage = require('./imageData.json');
const seedComments = require('./commentsData.json');

db.once('open', async () => {
  try {
    await Collections.deleteMany({});
    await Collections.create(seedCollections);
    await Comments.deleteMany({});
    await Comments.create(seedComments);
    await Image.deleteMany({});
    await Image.create(seedImage);
    await User.deleteMany({});
    await User.create(seedUser);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
