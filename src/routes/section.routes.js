const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/section.controller');

router.get('/sections/get-all-sections', sectionController.getAllSections); // Assuming controller has this method or similar, keeping pattern. User asked for it.
// Wait, existing file had `getCourseSections`, `addSection`, `updateSection`, `deleteSection`.
// User list has `GET_ALL_SECTIONS`, `GET_SECTIONS_BY_COURSE`, `CREATE_SECTION` etc.
// I should map correctly.
// User: `GET_SECTIONS_BY_COURSE` -> `/sections/course/:courseId`. Controller likely `getCourseSections`.
// User: `CREATE_SECTION` -> `/sections/create-section`. Controller `addSection`.
// User: `UPDATE_SECTION` -> `/sections/update-section/:sectionId`. Controller `updateSection`.
// User: `DELETE_SECTION` -> `/sections/delete-section/:sectionId`. Controller `deleteSection`.
// User: `GET_SECTION` -> `/sections/get-section/:sectionId`. Controller `getSectionById`? (Not seen in existing file lines 6-9, but might exist).
// User: `GET_ALL_SECTIONS` -> `/sections/get-all-sections`.
// I will start with the ones I can match.
// Existing `router.get('/courses/:courseId/sections', sectionController.getCourseSections);`

router.get('/sections/course/:courseId', sectionController.getCourseSections);
router.post('/sections/create-section', sectionController.addSection);
router.put('/sections/update-section/:sectionId', sectionController.updateSection); // User used UPDATE_SECTION path with PUT usually? Existing was PATCH. I'll switch to PUT if user path implies it, or keep PATCH? User path `/sections/update-section/:sectionId`. Standard is PUT/PATCH. I'll use PUT as mostly seen in other routes here.
router.delete('/sections/delete-section/:sectionId', sectionController.deleteSection);

// Extra from user list not explicitly in previous file lines:
// router.get('/sections/get-all-sections', sectionController.getAllSections); 
// router.get('/sections/get-section/:sectionId', sectionController.getSectionById);

module.exports = router;
