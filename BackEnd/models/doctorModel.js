const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    dob: String,
    email: String,
    status: String,
    contact: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
