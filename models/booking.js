const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    flightid: {
      type: String,
      required: true,
    },
    userid: {
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
    totleammount: {
      type: Number,
      required: true,
    },
    transactionid: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },

  {
    timeStamps: true,
  }
);

const bookingmodel = mongoose.model("bookings", bookingSchema);

module.exports = bookingmodel;
