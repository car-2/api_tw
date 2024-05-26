const Model = require('../models/UniversityModel');

exports.list = async (req, res) => {
    const variable = await Model.find();
    res.json(variable);
};

exports.create = async (req, res) => {
    const variable = new Model(req.body);
    await variable.save();
    res.status(201).json({ message: 'Client Created.'});
};

exports.update = async (req, res) => {
    await Model.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Client Updated.'});
};

  exports.delete = async (req, res) => {
    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Cliente Deleted'});
};