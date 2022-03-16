const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  comment1: {
    type: String,
    trim: true,
  },
  comment2: {
    type: String,
    trim: true,
  },
  comment3: {
    type: String,
    trim: true,
  },
  comment4: {
    type: String,
    trim: true,
  },
  comment5: {
    type: String,
    trim: true,
  },
  image_id: {
    type: Number,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
});

const Comments = model("Comments", commentsSchema);

module.exports = Comments;
