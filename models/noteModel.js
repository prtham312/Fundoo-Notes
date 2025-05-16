import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
     {
    title: {
      type: String,
      required: true,
    },
    content: String,
    color: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // references the User model
      required: true,
    },
  },
  { timestamps: true }
)

const Note = mongoose.model('Note', noteSchema);
export default Note;