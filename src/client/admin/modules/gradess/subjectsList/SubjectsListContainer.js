import React from "react";
import "./components/Subjects.css";

class SubjectsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [
        {
          id: "1",
          subject: "Математика",
          teacher: "проф. доктор хонорис кауза Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Математика",
          teacher: "проф. доктор хонорис кауза Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Математика",
          teacher: "проф. доктор хонорис кауза Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Математика",
          teacher: "проф. доктор хонорис кауза Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        },
        {
          id: "1",
          subject: "Математика",
          teacher: "проф. доктор хонорис кауза Стефани Кангалова",
          grade: 8,
          subGrade: "b"
        }
      ]
    };
  }

  render() {
    const { year, grade } = this.props;
    return (
      <div className="subjects_container">
        <div className="subjects_title">
          Предмети за учебната {year} за {grade}. клас{" "}
        </div>
      </div>
    );
  }
}

SubjectsListContainer.propTypes = {};

export default SubjectsListContainer;
