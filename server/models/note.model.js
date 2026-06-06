import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    topic: String,

    content: String,
  },
  { timestamps: true }
);

const Note =
  mongoose.models.Note ||
  mongoose.model("Note", noteSchema);

export default Note;