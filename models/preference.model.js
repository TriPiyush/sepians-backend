const mongoose = require("mongoose");

const Preference = mongoose.model(
  "Preference",
  new mongoose.Schema({
    color: String,
    label: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }

  })
);

module.exports = Preference;
