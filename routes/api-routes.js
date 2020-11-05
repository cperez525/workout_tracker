var db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).sort({ date: 1 }).then(dbWorkouts => {
            res.json(dbWorkouts)
        })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find().sort({ date: 1 }).then(dbWorkouts => {
            res.json(dbWorkouts)
        })
            .catch(err => {
                console.log(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.updateOne({ _id: req.params.id }, { $set: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.post("/api/workouts/", ({ body }, res) => {

        db.Workout.create(body).then(dbWorkout => {

            res.json(dbWorkout)
        })
            .catch(err => {
                console.log(err);
            })
    })

};

