const Doctor = require('../models/doctorModel');

exports.getDoctors = async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
};

exports.createDoctor = async (req, res) => {
    const doctor = new Doctor(req.body);
    await doctor.save();
    // res.json(doctor);
    return res.status(201).json({ message: 'Doctor created successfully' });
};

exports.updateDoctor = async (req, res) => {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doctor);
};

exports.deleteDoctor = async (req, res) => {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted' });
};
