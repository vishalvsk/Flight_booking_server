const mongoose = require("mongoose");

const flightSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    arrival: {
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
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const flightModel = mongoose.model("flight", flightSchema);

module.exports = flightModel;
