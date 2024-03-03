const express = require("express");
const Router = express.Router();
const Booking = require("../models/booking");
const Flight = require("../models/flight");

Router.post("/bookflight", async (req, res) => {
  const { flight, userid, from, to, totalamount } = req.body;

  try {
    const newBooking = new Booking({
      flightid: flight._id, // assuming flight has an _id field
      name: flight.name,
      userid,
      from,
      to,
      totalamount,
      transactionid: "1234",
    });

    const booking = await newBooking.save();

    const flighttemp = await Flight.findOne({ _id: flight._id });

    flighttemp.currentBooking.push({
      bookingid: booking._id,
      userid: userid,
      status: booking.status,
    });

    await flighttemp.save();

    res.status(200).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

Router.get("/getbookedflights", async (req, res) => {
  try {
    const bookedFlights = await Booking.find();
    res.status(200).json(bookedFlights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// In your bookingsRoute.js file

Router.post("/cancelbooking", async (req, res) => {
  const { bookingId } = req.body;

  try {
    const booking = await Booking.findOneAndDelete({ _id: bookingId });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const flight = await Flight.findOne({ _id: booking.flightid });
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    flight.currentBooking = flight.currentBooking.filter(
      (booking) => booking.bookingid !== bookingId
    );

    await flight.save();

    res.status(200).json({ message: "Booking canceled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = Router;
