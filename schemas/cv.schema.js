const mongoose = require("mongoose");

const cvSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    experience: {
      type: String,
    },
    lastDegree: {
      type: String
    },
    cvUrl: {
      type: String
    },
    userId: {
      ref: 'user',
      type: mongoose.Schema.Types.ObjectId
    }
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("cv", cvSchema);
