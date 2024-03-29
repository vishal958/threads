import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // likedUsers: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // }],
  likes: {
    type: Number,
    default: 0,
  },
  parentId: {
    type: String,
  },
  // activities: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Activity',
  // }],
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;