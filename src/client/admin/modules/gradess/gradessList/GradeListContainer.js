import React from "react";
import InitialSchool from "./components/InitialSchool";
import JuniorSchool from "./components/JuniorSchool";
import HighSchool from "./components/HighSchool";
import "./components/Grade.css";
import SubGradeModal from "./components/subGradeModal/SubGradeModal";

class GradeListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialSchool: [
        {
          id: 1,
          grade: 1,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 2,
          grade: 2,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 3,
          grade: 3,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 4,
          grade: 4,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        }
      ],
      juniorSchool: [
        {
          id: 5,
          grade: 5,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 6,
          grade: 6,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 7,
          grade: 7,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        }
      ],
      highSchool: [
        {
          id: 8,
          grade: 8,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 9,
          grade: 9,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 10,
          grade: 10,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 11,
          grade: 11,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        },
        {
          id: 12,
          grade: 12,
          subGrade: [
            { id: 1, subGrade: "а", teacher: "Алета Кочовска" },
            { id: 2, subGrade: "б", teacher: "Алета Кочовска" },
            { id: 3, subGrade: "в", teacher: "Алета Кочовска" }
          ]
        }
      ],
      subGrades: [],
      grade: null,
      subGradeModalIsOpen: false
    };
  }
  handleOpenModal = grade => {
    const { subGradeModalIsOpen } = this.state;
    console.log(grade);
    if (subGradeModalIsOpen) {
      this.setState({
        subGradeModalIsOpen: false,
        subGrades: [],
        grade: []
      });
    } else {
      this.setState({
        subGradeModalIsOpen: true,
        subGrades: grade.subGrade,
        grade: grade.grade
      });
    }
  };

  render() {
    const {
      initialSchool,
      juniorSchool,
      highSchool,
      subGradeModalIsOpen,
      subGrades,
      grade
    } = this.state;
    const { year } = this.props;
    return (
      <div className="grade_container">
        <div className="year_grade_title">
          Учебна {year}/{year + 1} година
        </div>
        <InitialSchool
          initial={initialSchool}
          openModal={this.handleOpenModal}
        />
        <JuniorSchool junior={juniorSchool} />
        <HighSchool high={highSchool} />
        <SubGradeModal
          grade={grade}
          subGrades={subGrades}
          modalIsOpen={subGradeModalIsOpen}
          openModal={this.handleOpenModal}
        />
      </div>
    );
  }
}

GradeListContainer.propTypes = {};

export default GradeListContainer;
