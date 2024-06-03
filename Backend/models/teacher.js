const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    //console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const Teacher = sequelize.define('teacher', {
  teacher_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Subject: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  
});

module.exports = Teacher;