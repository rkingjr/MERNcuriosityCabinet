const { Schema, model } = require("mongoose");

const collectionsSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  contributor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Collections = model("Collections", collectionsSchema);

module.exports = Collections;
