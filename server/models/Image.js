const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  photographer: {
    type: String,
    trim: true,
  },
  image_date: {
    type: String,
    trim: true,
  },
  filename: {
    type: String,
    trim: true,
  },
  filepath: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
