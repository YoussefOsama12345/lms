const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');

router.get('/progress/:userId/course/:courseId', progressController.getProgress);
router.post('/progress/markdown', progressController.createProgress);

module.exports = router;
