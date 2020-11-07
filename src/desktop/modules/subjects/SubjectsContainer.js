import React from "react";
import Subjects from "./Subjects.module.css";
import SubjectsTableHeader from "./components/SubjectsTableHeader";
import SubjectsTableRow from "./components/SubjectsTableRow";
import jwt_decode from "jwt-decode";
import axios from "axios";
class SubjectsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [],
      yearFrom: "",
      yearTo: ""
    };
  }
  componentDidMount() {
    this.handleGetSubjects();
  }
  handleGetSubjects = async () => {
    let user = jwt_decode(localStorage.getItem("jwt"));
    let subjects = [];
    let teachers = [];
    let rates = [];
    //unruffled-shaw-a7f049.netlify.app/.netlify/functions/api/v1/schoolYears/5f7a0ad4d7b29113650015ca
    https: await axios
      .get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/grades/${this.props.grade}`
      )
      .then(response => {
        axios
          .get(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/schoolYears/${response.data.yearId}`
          )
          .then(response => {
            this.setState({
              yearFrom: response.data.yearFrom,
              yearTo: response.data.yearTo
            });
          })
          .catch(function(error) {});
      })
      .catch(function(error) {});

    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/rates/user/${user.id}/${this.props.grade}`
      )
      .then(response => {
        subjects = response.data.subjects;
        teachers = response.data.teachers;
        rates = response.data.rates;
      })
      .catch(function(error) {});

    await subjects.map(subject => {
      rates.map(rate => {
        if (rate.subjectId === subject._id) {
          subject.rate = rate;
        }
      });
      teachers.map(teacher => {
        if (teacher._id === subject.teacherId) {
          subject.teacher = teacher;
        }
      });
    });
    subjects.sort(function (a, b) {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      return 0;
    })
    this.setState({ subjects: subjects });
  };

  render() {
    const { subjects, yearFrom, yearTo } = this.state;
    return (
      <div className={Subjects.subjects_container_holder}>
        <div className={Subjects.subjects_container_title}>
          Предмети за учебната {yearFrom}/{yearTo} година
        </div>
        {/*<div className={Subjects.subjects_container_title}>*/}
        {/*  /!*{schoolYear.grade}. клас*!/*/}
        {/*</div>*/}
        <div className={Subjects.list_container}>
          <table>
            <SubjectsTableHeader />
            <tbody>
              {subjects.map(subject => (
                <SubjectsTableRow subject={subject} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

SubjectsContainer.propTypes = {};

export default SubjectsContainer;
