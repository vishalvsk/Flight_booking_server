const express = require("express");
const Router = express.Router();
const Booking = require("../models/booking");

Router.post("/bookflight", async (req, res) => {
  const { flight, userid, from, to, totalamount } = req.body;

  try {
    const newBooking = new Booking({
      flight: flight,
      userid: userid,
      from: from,
      to: to,
      totalamount: totalamount,
    });

    await newBooking.save();

    res.status(200).json({ message: "Booking created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = Router;
