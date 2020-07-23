import React from "react";
import YearCreate from "./components/YearCreate.module.css";
import Year from "./components/year/Year";
import axios from "axios";
import CreateGradeContainer from "./components/CreateGradeContainer";
import GradeListContainer from "./components/GradeListContainer";

class YearCreateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editModel: false,
      editGrade: {},
      yearFrom: null,
      yearTo: null,
      grade: 1,
      subGrade: "a",
      teacher: "",
      students: [],
      users: [],
      addStudent: "",
      filterByName: false,
      search: [],
      schoolYear: {
        yearFrom: 2019,
        yearTo: 2020,
        grades:[]
      }
    };
  }
  componentDidMount() {
    this.handleGetUsers();
  }

  handleInput = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  handleGetUsers = async () => {
    await axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function(error) {});
  };
  handleSearch = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
    let students = [];
    if (event.target.value.trim().length === 0) {
      this.setState({ search: [] });
    } else {
      this.state.users.map(user => {
        if (this.state.filterByName) {
          if (
            user.name.includes(event.target.value) ||
            user.secondName.includes(event.target.value) ||
            user.familyName.includes(event.target.value)
          ) {
            students.push(user);
          }
        } else {
          if (user.username.includes(event.target.value.trim())) {
            students.push(user);
          }
        }
      });
      this.setState({ search: students });
    }
    students = [];
  };
  handleChangeFilter = () => {
    if (this.state.filterByName) {
      this.setState({ filterByName: false });
    } else {
      this.setState({ filterByName: true });
    }
  };
  handleAddStudent = student => {
    let stu = [];
    this.state.students.push(student);
    this.state.students.map(student => {
      stu = this.state.users.filter(user => user._id !== student._id);
    });
    this.setState({ search: [], users: stu, addStudent: "" });
  };
  handleCreateGrade = () => {
    const { teacher, grade, subGrade, students, schoolYear } = this.state;
    let NewGrade = {
      grade: parseInt(grade),
      teacher: teacher,
      subGrade: subGrade,
      students: students
    };
    let filterGradesSchool = schoolYear.grades.filter(
      grade =>
        grade.subGrade === NewGrade.subGrade && grade.grade === NewGrade.grade
    );
      if (filterGradesSchool.length === 0) {
        schoolYear.grades.push(NewGrade);
        this.setState({
          students: [],
          teacher: "",
          grade: 1,
          subGrade: "a"
        });
    }
    this.setState({});
    localStorage.setItem("schoolYear", JSON.stringify(this.state.schoolYear));
  };
  handleDeleteStudent = id => {
    const { students } = this.state;
    let newStudents = students.filter(stu => stu._id !== id);
    this.setState({ students: newStudents });
  };
  handleDeleteGrade = () => {

    const { schoolYear,editGrade } = this.state;

      let newGrade = schoolYear.grades.filter(
        grd => grd.grade !== editGrade.grade || grd.subGrade !== editGrade.subGrade
      );

      this.setState({
        schoolYear: { ...this.state.schoolYear, grades: newGrade },
        editModel:false
      });
    };

  handleTakeGrade = (grade, subGrade) => {
    const { schoolYear } = this.state;

      let newGrade = schoolYear.grades.filter(
        grd => grd.grade === grade && grd.subGrade === subGrade
      );
      this.setState({
        editGrade: newGrade[0],
        students:newGrade[0].students,
        editModel: true
      });
  };
  handleEditGrade = () => {
    const {
      teacher,
      grade,
      subGrade,
      students,
      schoolYear,
      editGrade
    } = this.state;

    let newGrade = {
      grade: parseInt(grade),
      subGrade: subGrade,
      teacher: teacher,
      students: students
    };

    let filterGradesSchool = schoolYear.grades.filter(
      grade =>
        grade.subGrade === newGrade.subGrade && grade.grade === newGrade.grade
    );

      if (filterGradesSchool.length === 0) {
        let school = schoolYear.grades.filter(
          grd =>
            grd.grade !== editGrade.grade || grd.subGrade !== editGrade.subGrade
        );
        school.push(newGrade);
        this.setState({
          schoolYear: {
            ...this.state.schoolYear,
            grades: school,
          },
          editModel: false
        });
    }
  };
  render() {
    const {
      yearFrom,
      yearTo,
      teacher,
      grade,
      subGrade,
      students,
      users,
      addStudent,
      filterByName,
      search,
      schoolYear,
      editModel
    } = this.state;
    return (
      <div className={YearCreate.year_container}>
        <div className={YearCreate.year_title_border}>
          <div className={YearCreate.year_create_title}>
            Създаване на учебна година
          </div>
            <Year
                yearFrom={yearFrom}
                yearTo={yearTo}
                handleInput={this.handleInput}
            />
        </div>
        <div className={YearCreate.year_holder}>
          <GradeListContainer
            schoolYear={schoolYear}
            handleEditGrade={this.handleTakeGrade}
          />
          <CreateGradeContainer
            handleCreateGrade={this.handleCreateGrade}
            yearFrom={yearFrom}
            editModel={editModel}
            yearTo={yearTo}
            teacher={teacher}
            grade={grade}
            subGrade={subGrade}
            students={students}
            users={users}
            addStudent={addStudent}
            filterByName={filterByName}
            search={search}
            handleDeleteGrade={this.handleDeleteGrade}
            handleEditGrade={this.handleEditGrade}
            handleDeleteStudent={this.handleDeleteStudent}
            handleInput={this.handleInput}
            handleAddStudent={this.handleAddStudent}
            handleChangeFilter={this.handleChangeFilter}
            handleSearch={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

YearCreateContainer.propTypes = {};

export default YearCreateContainer;
