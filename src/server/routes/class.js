const router = require("express").Router();
let Class = require("../models/class/class.model");


router.route("/").get((req, res) => {
    Class.find()
    .then(product => res.json(product))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const students = req.body.students;
  const quantity = req.body.quantity;
  const years = req.body.years;
  const teacher = req.body.teacher;
  const slug =req.body.slug;
  const newClass = new Class({
    title,
    students,
    years,
    teacher,
    quantity
  });

  newClass
    .save()
    .then(() => res.json(newClass))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Class.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
    Class.findByIdAndDelete(req.params.id)
    .then(() => res.json("Class deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
    Class.findById(req.params.id)
    .then(subject => {
      subject.title = req.body.title;
      subject.students = req.body.students;
      subject.quantity = req.body.quantity;
      subject.years = req.body.years;
      subject.teacher = req.body.teacher;
      subject.slug = req.body.slug;
      subject.date = Date.parse(req.body.date);
      subject
        .save()
        .then(() => res.json(product))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
