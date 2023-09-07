module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Course;
  };