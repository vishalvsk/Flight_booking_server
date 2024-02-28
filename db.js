const mongoose = require("mongoose");

// Replace 'your_database_name' with the actual name of your database
const uri =
  "mongodb+srv://vishalkaralevsk:vishalkarale3245@cluster0.9bb8kib.mongodb.net/mern_flight";

mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("mongodb connection is failed");
});

connection.on("connected", () => {
  console.log("mongodb connection successful");
});

module.exports = mongoose;
