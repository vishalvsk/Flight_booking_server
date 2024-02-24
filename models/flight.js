const mongoose = require("mongoose");

const flightSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    imgUrls: [],
    currentBooking: [],
    type: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

const flightModel = mongoose.model("flight", flightSchema);

module.exports = flightModel
