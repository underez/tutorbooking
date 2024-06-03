const Member = require('../../models/member'); 


const getAllMembers = async () => {
  return await Member.findAll();
};

const getMemberById = async (member_id) => {
  return await Member.findByPk(member_id);
};

const createMember = async (memberData) => {
  return await Member.create(memberData);
};

const updateMember = async (memberId, memberData) => {
  const [numRowsUpdated, updatedRows] = await Member.update(memberData, {
    where: { member_id: memberId },
    returning: true,
  });

  if (numRowsUpdated === 1) {
    return updatedRows[0];
  } else {
    throw new Error('Member not found');
  }
};

const deleteMember = async (memberId) => {
  const numRowsDeleted = await Member.destroy({
    where: { member_id: memberId },
  });

  if (numRowsDeleted === 1) {
    return { message: 'Member deleted successfully' };
  } else {
    throw new Error('Member not found');
  }
};

const getMemberByUsername = async (username) => {
  return await Member.findOne({ where: { username } });
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
  getMemberByUsername
};
