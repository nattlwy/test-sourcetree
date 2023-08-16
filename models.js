const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const planetSchema = new Schema({
  name: { type: String, required: true },
  diameter: { type: String, required: true },
  moons: { type: String, required: true},
  desc: { type: String, required: true},
  url: { type: String, required: true}
});

// This Activitry creates the collection called activitimodels
const Planetmodel = mongoose.model("Planet", planetSchema);
module.exports = Planetmodel;
