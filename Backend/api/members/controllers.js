const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const memberService = require('./services');

// GET /api/members
const getAllMembers = async (req, res) => {
  try {
    const members = await memberService.getAllMembers();
    res.json(members);
  } catch (err) {
    console.error('Error fetching members', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/members/:id
const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await memberService.getMemberById(id);
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ error: 'Member not found' });
    }
  } catch (err) {
    console.error('Error fetching member', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /api/members
const createMember = async (req, res) => {
  try {
    const newMemberData = req.body;
    const createdMember = await memberService.createMember(newMemberData);
    res.status(201).json(createdMember);
  } catch (err) {
    console.error('Error creating member', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT /api/members/:id
const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMemberData = req.body;
    const updatedMember = await memberService.updateMember(id, updatedMemberData);
    res.json(updatedMember);
  } catch (err) {
    if (err.message === 'Member not found') {
      res.status(404).json({ error: 'Member not found' });
    } else {
      console.error('Error updating member', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// DELETE /api/members/:id
const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    await memberService.deleteMember(id);
    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    if (err.message === 'Member not found') {
      res.status(404).json({ error: 'Member not found' });
    } else {
      console.error('Error deleting member', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

const checkUsernameExists = async (req, res) => {
  try {
    const { username } = req.params;
    const member = await memberService.getMemberByUsername(username);
    if (member) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    console.error('Error checking username', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const member = await memberService.getMemberByUsername(username);
    if (!member) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, member.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const payload = {
      member: {
        id: member.member_id
      }
    };

    const token = jwt.sign(payload, 'secret_token', { expiresIn: '1h' });

    // ส่งข้อมูลผู้ใช้กลับไปพร้อมกับ token
    res.json({ token, user: { id: member.member_id, username: member.username, name: member.name, surname: member.surname , email: member.email , balance : member.balance } });
  } catch (err) {
    console.error('Error logging in', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
  checkUsernameExists,
  login
};