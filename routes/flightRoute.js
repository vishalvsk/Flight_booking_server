const express = require("express");
const router = express.Router();

const flightModel = require("../models/flight");

router.get("/getallflights", async (req, res) => {
  try {
    const flights = await flightModel.find({});
    res.send(flights);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
