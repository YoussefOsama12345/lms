const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller')
const upload = require('../middlewares/upload.middleware');
const ROUTES = require('../constants/paths');

router.post(ROUTES.UPLOAD.UPLOAD_FILE, upload.single('file'), uploadController.uploadToCloudinary);

module.exports = router;
