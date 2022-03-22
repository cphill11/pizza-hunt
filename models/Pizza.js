// import dependencies; Schema constructor & model fxn come straight from Mongoose
const { Schema, model } = require('mongoose');

// create schema w/ desired data after import functionality
const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      // creates timestamp should user not enter a value
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: []
  });

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;