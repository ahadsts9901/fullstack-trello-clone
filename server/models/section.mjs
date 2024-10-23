import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})

export default mongoose.model('Section', sectionSchema)