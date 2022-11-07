const { default: mongoose } = require("mongoose");
const User = require("../schemas/users.schema");
const CV = require("../schemas/cv.schema");

const createCV = async (requestBodyData) => {
  const cv = new CV({
    _id: mongoose.Types.ObjectId(),
    experience: requestBodyData.experience,
    lastDegree: requestBodyData.lastDegree,
    cvUrl: requestBodyData.cvUrl,
    userId: requestBodyData.userId,
  });

  const createdCV = await cv.save();
  return {
    message: "SUCCESS",
    data: createdCV,
  };
};

const getAllCVs = async () => {
  // const cvs = await CV.find()
  // .populate({ path: 'userId', model: 'user', select: '-_id name age' });
  const aggregationPipeline = [
    {
      '$lookup': {
        'from': 'users', 
        'localField': 'userId', 
        'foreignField': '_id', 
        'as': 'user'
      }
    }, {
      '$match': {
        'experience': '2'
      }
    }
  ];
  const cvs = await CV.aggregate(aggregationPipeline);
  return {
    message: "SUCCESS",
    data: cvs,
  };
};

const getAUserById = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return {
    message: "SUCCESS",
    data: user,
  };
};

const update = async (userId, updateObj) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateObj);
  return {
    message: "SUCCESS",
    data: updatedUser,
  };
};

module.exports = {
  createCV,
  getAllCVs,
  getAUserById,
  update,
};
