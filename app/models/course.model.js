module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      title: {
        type: Sequelize.STRING
      },
      /*number: {
        type: Sequelize.INTEGER
      },*/
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Course;
  };