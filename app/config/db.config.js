module.exports = {
    HOST: "localhost",
    USER: "t52023",
    PASSWORD: "cs@oc2023t5",
    DB: "courses",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };