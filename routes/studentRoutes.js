const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

// Ví dụ API GET: Lấy danh sách sinh viên
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// (Bạn sẽ viết thêm các API PATCH, DELETE, POST... vào đây)

module.exports = router;