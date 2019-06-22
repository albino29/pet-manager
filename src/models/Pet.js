const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
PetSchema.plugin(mongoosePaginate);
mongoose.model('Pet', PetSchema);
