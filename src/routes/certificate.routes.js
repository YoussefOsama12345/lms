const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificate.controller');

router.get('/certificates/get-all-certificates', certificateController.getAllCertificates);
router.get('/certificates/get-certificate/:certificateId', certificateController.getCertificateById);
router.post('/certificates/create-certificate', certificateController.createCertificate);
router.put('/certificates/update-certificate/:certificateId', certificateController.updateCertificate);
router.delete('/certificates/delete-certificate/:certificateId', certificateController.deleteCertificate);

module.exports = router;
