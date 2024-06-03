
const teacherService = require('./services');

// GET /api/teachers
const getAllteachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.json(teachers);
  } catch (err) {
    console.error('Error fetching teachers', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/teachers/:id
const getTeachersById = async (req, res) => {
  try {
    const { id } = req.params;
    const teachers = await teacherService.getTeachersById(id);
    if (teachers) {
      res.json(teachers);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (err) {
    console.error('Error fetching teacher', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /api/teachers
const createteacher = async (req, res) => {
  try {
    const newTeacherData = req.body;
    const createdTeacher = await teacherService.createTeacher(newTeacherData);
    res.status(201).json(createdTeacher);
  } catch (err) {
    console.error('Error creating teacher', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT /api/teachers/:id
const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTeacherData = req.body;
    const updatedTeacher = await teacherService.updateTeacher(id, updatedTeacherData);
    res.json(updatedTeacher);
  } catch (err) {
    if (err.message === 'Teacher not found') {
      res.status(404).json({ error: 'Teacher not found' });
    } else {
      console.error('Error updating teacher', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// DELETE /api/teachers/:id
const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await teacherService.deleteTeacher(id);
    res.json({ message: 'Teacher deleted successfully' });
  } catch (err) {
    if (err.message === 'Teacher not found') {
      res.status(404).json({ error: 'Teacher not found' });
    } else {
      console.error('Error deleting teacher', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};



module.exports = {
  getAllteachers,
  getTeachersById,
  createteacher,
  updateTeacher,
  deleteTeacher,
};