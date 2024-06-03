require("dotenv").config();
const express = require("express")
// const { Sequelize, DataTypes } = require("sequelize");
const corsMiddleware = require('./corsMiddleware');

const app = express();
const port = process.env.PORT || 3000 ;
app.use(express.json());
app.use(corsMiddleware);

// const sequelize = new Sequelize(process.env.DB_URL, {
//     dialect: "postgres",
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   });
//   sequelize
//   .sync()
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   const Member = sequelize.define('member', {
//     member_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//       },
//       surname: {
//           type: DataTypes.STRING,
//           allowNull: false,
//       }

//   })
   app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})

// app.get("/", (reg,res) => { 
//     res.send("Hello world"); 
// })

// app.get('/api/member', async (req, res) => {
//     try {
//       const members = await Member.findAll();
//       res.json(members);
//     } catch (err) {
//       console.error('Error fetching members', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });

//   app.post("/create-member", async (req, res) => {
//     try {
//         const { username, password, name, surname } = req.body;
//         const newMember = await Member.create({ username, password, name, surname });
//         res.json(newMember);
//     } catch (err) {
//         console.error('Error creating member:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.delete('/api/member/:member_id', async (req, res) => {
//     try {
//         const { member_id } = req.params;
//         const deletedMemberCount = await Member.destroy({
//             where: {
//                 member_id: member_id
//             }
//         });
//         if (deletedMemberCount > 0) {
//             res.status(200).json({ message: 'Member deleted successfully' });
//         } else {
//             res.status(404).json({ error: 'Member not found' });
//         }
//     } catch (err) {
//         console.error('Error deleting member:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // API endpoint สำหรับแก้ไขข้อมูล member โดยใช้ member_id
// app.put('/api/member/:member_id', async (req, res) => {
//     try {
//         const { member_id } = req.params;
//         const { username, password, name, surname } = req.body;

//         // อัพเดทข้อมูลสมาชิกที่มี member_id ตรงกับที่ระบุ
//         const updatedMember = await Member.update({
//             username,
//             password,
//             name,
//             surname
//         }, {
//             where: {
//                 member_id: member_id
//             },
//             returning: true // ต้องการให้ Sequelize ส่งค่าที่ถูกแก้ไขกลับมา
//         });

//         // ตรวจสอบว่ามีข้อมูลถูกอัพเดทหรือไม่
//         if (updatedMember[0] === 1) {
//             res.status(200).json(updatedMember[1][0]); // ส่งข้อมูลสมาชิกที่ถูกอัพเดทกลับไปยังผู้ใช้งาน
//         } else {
//             res.status(404).json({ error: 'Member not found' });
//         }
//     } catch (err) {
//         console.error('Error updating member:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/api/member/:member_id', async (req, res) => {
//     try {
//         const { member_id } = req.params;

//         // ค้นหาข้อมูลสมาชิกโดยใช้ member_id
//         const member = await Member.findByPk(member_id);

//         // ตรวจสอบว่ามีข้อมูลสมาชิกที่ตรงกับ member_id ที่ระบุหรือไม่
//         if (member) {
//             res.status(200).json(member);
//         } else {
//             res.status(404).json({ error: 'Member not found' });
//         }
//     } catch (err) {
//         console.error('Error fetching member:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

const memberRoutes = require('./api/members/routes');
app.use('/api/members', memberRoutes);

const teacherRoutes = require('./api/teachers/routes');
app.use('/api/teachers', teacherRoutes);