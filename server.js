const express = require("express");

const app = express();

const dbconfig = require("./db");

const flightRoute = require("./routes/flightRoute");
const userRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");

app.use(express.json());

app.use("/api/flights", flightRoute);
app.use("/api/users", userRoute);
app.use("/api/bookings", bookingRoute);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("the server is running on port 5000");
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
