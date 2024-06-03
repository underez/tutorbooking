const Teacher = require('../../models/teacher'); 


const getAllTeachers = async () => {
  return await Teacher.findAll();
};

const getTeacherById = async (teacher_id) => {
  return await Teacher.findByPk(teacher_id);
};

const createTeacher = async (teacherData) => {
  return await Teacher.create(teacherData);
};

const updateTeacher = async (teacherId, teacherData) => {
  const [numRowsUpdated, updatedRows] = await Teacher.update(teacherData, {
    where: { teacher_id: teacherId },
    returning: true,
  });

  if (numRowsUpdated === 1) {
    return updatedRows[0];
  } else {
    throw new Error('Teacher not found');
  }
};

const deleteTeacher = async (teacherId) => {
  const numRowsDeleted = await Teacher.destroy({
    where: { teacher_id: teacherId },
  });

  if (numRowsDeleted === 1) {
    return { message: 'Teacher deleted successfully' };
  } else {
    throw new Error('Teacher not found');
  }
};

const getTeacherByUsername = async (username) => {
  return await Teacher.findOne({ where: { username } });
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherByUsername
};
