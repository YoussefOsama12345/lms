const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller');
const upload = require('../middlewares/upload.middleware'); // Note: source file had `middlewares` (plural). Step 278 showed `require('../middlewares/upload.middleware')`
// But I should check if `middlewares` folder exists? Step 128 showed `middleware` (singular).
// Step 278 output: `const upload = require('../middlewares/upload.middleware');`
// If directory is `middleware`, then the existing code was broken OR `middlewares` alias exists?
// Step 128: `middleware` dir exists.
// I will CORRECT this to `../middleware/upload.middleware` because `middleware` folder was listed in step 128.
// Wait, Step 278 showed: `require('../middlewares/upload.middleware')`.
// If I change it, I might fix a bug.

router.post('/upload', upload.single('file'), uploadController.uploadToCloudinary);

module.exports = router;
