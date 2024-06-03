const express = require('express');
const router = express.Router();
const memberController = require('./controllers');

router.get('/', memberController.getAllMembers);
router.get('/:id', memberController.getMemberById);
router.post('/', memberController.createMember);
router.put('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);
router.get('/check-username/:username', memberController.checkUsernameExists);
router.post('/login', memberController.login);



module.exports = router
