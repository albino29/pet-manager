const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pet = await Pet.paginate({}, { page, limit: 2 });

    return res.status(200).json(pet);
  },

  async store(req, res) {
    const pet = await Pet.create(req.body);

    return res.status(201).json(pet);
  },

  async show(req, res) {
    const pet = await Pet.findById(req.params.id);
    return res.status(200).json(pet);
  },

  async update(req, res) {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.status(200).json(pet);
  },

  async destroy(req, res) {
    await Pet.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
