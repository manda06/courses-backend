module.exports = {
    HOST: "localhost",
    USER: "t52023",
    PASSWORD: "CS@oc2023t5",
    DB: "course-t5",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };