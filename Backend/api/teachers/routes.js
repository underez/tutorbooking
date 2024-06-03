const express = require('express');
const router = express.Router();
const teacherController = require('./controllers');

router.get('/', teacherController.getAllteachers);
router.get('/:id', teacherController.getTeachersById);
router.post('/', teacherController.createteacher);
router.put('/:id', teacherController.updateTeacher);
router.delete('/:id', teacherController.deleteTeacher);


module.exports = router
