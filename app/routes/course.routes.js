module.exports = (app) => {
    const courses = require("../controller/course.controller.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", courses.create);
  
    // Retrieve all Tutorials
    router.get("/",  courses.findAll);
  
    // Retrieve all Tutorials for user
    //router.get("/userTut/:userId", [authenticate], tutorials.findAllForUser);
  
    // Retrieve a single Tutorial with id
    router.get("/:id",  courses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id",  courses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", courses.delete);
  
    // Delete all Tutorials
    router.delete("/", courses.deleteAll);
  
    app.use("/course-t5/courses", router);
  };
  