const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require('morgan');
const app = express();
const router = express.Router();

mongoose.connect("mongodb+srv://iponwebschool:Hl8Ttn3z@cluster0.atpve.mongodb.net/Cluster0?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

router.get("/", (req, res) => {
    res.json({
        hello: "hi!"
    });
});

app.use(morgan('tiny'));
const usersRouter = require("../routes/users");
app.use("/api/v1/users", usersRouter);
const teacherRouter=require("../routes/teacher");
app.use("/api/v1/teacher",teacherRouter);
const gradeRouter=require("../routes/grade");
app.use("/api/v1/grades",gradeRouter);
const rateRouter=require("../routes/rate");
app.use("/api/v1/rates",rateRouter);
const studentsInGradeRouter=require("../routes/studentsInGrade");
app.use("/api/v1/studentsInGrade",studentsInGradeRouter);
const subjectRouter=require("../routes/subject");
app.use("/api/v1/subject",subjectRouter);
const classRouter=require("../routes/subjectClass");
app.use("/api/v1/class",classRouter);
const authentication = require("../routes/authentication");
app.use("/api/v1/auth", authentication);
const schoolYearRouter = require("../routes/schoolYear");
app.use("/api/v1/schoolYears", schoolYearRouter);
const categoryRouter = require("../routes/category");
app.use("/api/v1/category", categoryRouter);

app.use(`/api/v1/kur`, router);

module.exports = app;
module.exports.handler = serverless(app);
