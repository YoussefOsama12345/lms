const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificate.controller');
const ROUTES = require('../constants/paths');

router.get(ROUTES.CERTIFICATE.GET_ALL_CERTIFICATES, certificateController.getAllCertificates);
router.get(ROUTES.CERTIFICATE.GET_CERTIFICATE, certificateController.getCertificateById);
router.post(ROUTES.CERTIFICATE.CREATE_CERTIFICATE, certificateController.createCertificate);
router.put(ROUTES.CERTIFICATE.UPDATE_CERTIFICATE, certificateController.updateCertificate);
router.delete(ROUTES.CERTIFICATE.DELETE_CERTIFICATE, certificateController.deleteCertificate);

module.exports = router;
