const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    studentCode: { type: String, required: true, trim: true, unique: true },
    score: { type: Number, required: true, min: 0, max: 10 }
}, { timestamps: true });

// unique tạo index duy nhất, không phải validator của Mongoose.
module.exports = mongoose.model('Student', studentSchema);
