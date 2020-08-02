import React from "react";
import "./components/Subjects.module.css";
import SubjectCard from "./components/subjectCard/SubjectCard";
import SubjectStyle from './components/Subjects.module.css'

class SubjectsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [
        {
          id: "1",
          subject: "Български език",
          teacher: "Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Математика",
          teacher: "Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Английски език",
          teacher: "Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "География",
          teacher: "Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Физическа култура и спорт",
          teacher: "Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Информационни технологии технологии технологии технологии",
          teacher: "Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        }
      ]
    };
  }

  render() {
    const { year, grade } = this.props;
    const{ subjects}=this.state;
    return (
      <div className={SubjectStyle.subjects_container}>
        <div className={SubjectStyle.subjects_title}>
          Предмети за учебната {year} за {grade}. клас{" "}
        </div>
        <div className={SubjectStyle.subjects_holder}>
          {
            subjects.map(subject=>(
              <SubjectCard subject={subject}/>
            ))
          }
        </div>
      </div>
    );
  }
}

SubjectsListContainer.propTypes = {};

export default SubjectsListContainer;
