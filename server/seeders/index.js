const db = require("../config/connection");
const { Collections, Comments, Image, User } = require("../models");
const seedCollections = require("./collectionsData.json");
const seedUser = require("./userData.json");
const seedImage = require("./imageData.json");
const seedComments = require("./commentsData.json");

db.once("open", async () => {
  try {
    await Collections.deleteMany({});
    await Comments.deleteMany({});
    await Image.deleteMany({});
    await User.deleteMany({});
    await Collections.create(seedCollections);
    await Comments.create(seedComments);
    await Image.create(seedImage);
    await User.create(seedUser);
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
