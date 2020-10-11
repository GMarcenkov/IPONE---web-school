import React from "react";
import "./components/Subjects.module.css";
import SubjectCard from "./components/subjectCard/SubjectCard";
import SubjectStyle from "./components/Subjects.module.css";
import axios from "axios";

class SubjectsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [],
      grade: "",
    };
  }
  componentDidMount() {
    this.handleGetSubjects();
  }
  handleGetSubjects = async () => {
      let teachers=[];
      let subjects=[];
  await  axios
      .get(`https://unruffled-shaw-a7f049.netlify.app/.netlify/functions/api/v1/grades/${this.props.grade}`)
      .then(response => {

        this.setState({
          grade: response.data,
        });
      })
      .catch(function(error) {});
  await  axios
      .get(`https://unruffled-shaw-a7f049.netlify.app/.netlify/functions/api/v1/class/grade/${this.props.grade}`)
      .then(response => {
        subjects=response.data
      })
      .catch(function(error) {});
   await   axios
          .get(`https://unruffled-shaw-a7f049.netlify.app/.netlify/functions/api/v1/teacher/grade/${this.props.grade}`)
          .then(response => {
            teachers=response.data;
          })
          .catch(function(error) {});


           subjects.map(subject=>{
               teachers.map(teacher=>{
                   if(teacher._id===subject.teacherId){
                       subject.teacher=teacher
                   }
               })
           })

      this.setState({subjects:subjects})

  };
  render() {
    const { subjects, grade, subGrade } = this.state;
      const subgrade=()=>{
          switch (grade.subGrade) {
              case "a":
                  return "А";
              case "b":
                  return "Б";
              case "v":
                  return "В";
              case "g":
                  return "Г";
              case "d":
                  return "Д";
              case "e":
                  return "Е";
          }
      }
    return (
      <div className={SubjectStyle.subjects_container}>
        <div className={SubjectStyle.subjects_title}>
          Предмети за {grade.grade} {subgrade()} клас{" "}
        </div>

        <div className={SubjectStyle.subjects_holder}>
          {subjects.map(subject => (
            <SubjectCard subject={subject} />
          ))}
        </div>
      </div>
    );
  }
}

SubjectsListContainer.propTypes = {};

export default SubjectsListContainer;
