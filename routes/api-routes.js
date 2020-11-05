var db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req,res) => {

        db.Workout.find({}).sort({date: 1}).then(dbWorkouts => {
            res.json(dbWorkouts)
        });
    });


    app.put("/api/workouts/:id", (req,res) => {

        db.Workout.updateOne({_id : req.params.id}, req.body).then(dbWorkout => {

            res.json(dbWorkout)
        })
    })
    
}

