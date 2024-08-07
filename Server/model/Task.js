import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  ownerId: {
    type: String,
    ref: "User",
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  task: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
export default Task;