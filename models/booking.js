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
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // Reference the User model
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
    totalamount: {
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
    timestamps: true,
  }
);


const bookingmodel = mongoose.model("bookings", bookingSchema);

module.exports = bookingmodel;
