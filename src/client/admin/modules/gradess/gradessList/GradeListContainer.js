import React from "react";
import InitialSchool from "./components/InitialSchool";
import JuniorSchool from "./components/JuniorSchool";
import HighSchool from "./components/HighSchool";
import "./components/Grade.css";
import SubGradeModal from "./components/subGradeModal/SubGradeModal";
import axios from "axios";

class GradeListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialSchool: [],
      juniorSchool: [],
      highSchool: [],
      subGrades: [],
      grade: null,
      subGradeModalIsOpen: false,
      yearFrom: "",
      yearTo: ""
    };
  }
  componentDidMount() {
    this.handleGetSchoolYear();
  }
  handleGetSchoolYear = async () => {
    let initialSchool = [];
    let juniorSchool = [];
    let highSchool = [];
    await axios
      .get(`http://localhost:5000/schoolYear/findByYear/${this.props.yearFrom}`)
      .then(response => {
        console.log("ss", response);
        this.setState({
          yearFrom: response.data.yearFrom,
          yearTo: response.data.yearTo
        });
        response.data.grades.map(grade => {
          if (grade.grade > 0 && grade.grade < 5) {
            initialSchool.push(grade);
          }
          if (grade.grade > 4 && grade.grade < 8) {
            juniorSchool.push(grade);
          }
          if (grade.grade > 7 && grade.grade < 13) {
            highSchool.push(grade);
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({
      initialSchool: initialSchool,
      juniorSchool: juniorSchool,
      highSchool: highSchool
    });
    console.log(initialSchool);
  };
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
        subGrades: grade.subGrades,
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
      grade,
      yearFrom,
      yearTo
    } = this.state;
    return (
      <div className="grade_container">
        <div className="year_grade_title">
          Учебна {yearFrom}/{yearTo} година
        </div>
        <InitialSchool
          initial={initialSchool}
          openModal={this.handleOpenModal}
        />
        <JuniorSchool
            junior={juniorSchool}
            openModal={this.handleOpenModal}
        />
        <HighSchool
            high={highSchool}
            openModal={this.handleOpenModal}
        />
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
