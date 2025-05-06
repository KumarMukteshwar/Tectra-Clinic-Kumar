const express = require('express');
const router = express.Router();
const doctorCtrl = require('../controllers/doctorController');

router.get('/get-doctor', doctorCtrl.getDoctors);
router.post('/create-doctor', doctorCtrl.createDoctor);
router.put('/update-doctor/:id', doctorCtrl.updateDoctor);
router.delete('/delete-doctor/:id', doctorCtrl.deleteDoctor);

module.exports = router;
