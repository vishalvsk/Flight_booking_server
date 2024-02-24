const mongoose = require("mongoose");

// Replace 'your_database_name' with the actual name of your database
const uri =
  "mongodb+srv://vishalvsk3245:vishalvsk3245@vishalvskcluster.wzyt9io.mongodb.net/vishalFlight";

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
