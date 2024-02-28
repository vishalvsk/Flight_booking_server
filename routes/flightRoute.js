const express = require("express");
const router = express.Router();

const flightModel = require("../models/flight");

router.get("/getallflights", async (req, res) => {
  try {
    const flights = await flightModel.find({});
    // console.log(flights);
    res.send(flights);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getflightbyid", async (req, res) => {
  const flightid = req.body.flightid;

  try {
    const flight = await flightModel.findOne({ _id: flightid });
    res.send(flight);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
