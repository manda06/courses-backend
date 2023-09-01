module.exports = (app) => {
    const tutorials = require("../controller/course.controller.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/",  tutorials.findAll);
  
    // Retrieve all Tutorials for user
    //router.get("/userTut/:userId", [authenticate], tutorials.findAllForUser);
  
    // Retrieve a single Tutorial with id
    router.get("/:id",  tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id",  tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  
    app.use("/course-t5/courses", router);
  };
  