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
      editModel:false,
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
        juniorSchool: [],
        interSchool: [],
        highSchool: []
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
    let filterJuniorSchool = schoolYear.juniorSchool.filter(
      grade =>
        grade.subGrade === NewGrade.subGrade && grade.grade === NewGrade.grade
    );
    let filterInterSchool = schoolYear.interSchool.filter(
      grade =>
        grade.subGrade === NewGrade.subGrade && grade.grade === NewGrade.grade
    );
    let filterHighSchool = schoolYear.highSchool.filter(
      grade =>
        grade.subGrade === NewGrade.subGrade && grade.grade === NewGrade.grade
    );
    if (parseInt(grade) > 0 && parseInt(grade) < 5) {
      if (filterJuniorSchool.length === 0) {
        schoolYear.juniorSchool.push(NewGrade);
        this.setState({
          students: [],
          teacher: "",
          grade: 1,
          subGrade: "a"
        });
      }
    }
    if (parseInt(grade) > 4 && parseInt(grade) < 8) {
      if (filterInterSchool.length === 0) {
        schoolYear.interSchool.push(NewGrade);
        this.setState({
          students: [],
          teacher: "",
          grade: 1,
          subGrade: "a"
        });
      }
    }
    if (parseInt(grade) > 7 && parseInt(grade) < 13) {
      if (filterHighSchool.length === 0) {
        schoolYear.highSchool.push(NewGrade);
        this.setState({
          students: [],
          teacher: "",
          grade: 1,
          subGrade: "a"
        });
      }
    }
    this.setState({});
    localStorage.setItem("schoolYear", JSON.stringify(this.state.schoolYear));
    console.log(this.state.schoolYear);
  };
  handleDeleteStudent = id => {
    const { students } = this.state;
    let newStudents = students.filter(stu => stu._id !== id);
    this.setState({ students: newStudents });
  };
  handleDeleteGrade = (grade, subGrade) => {
    console.log(grade, subGrade);
    const { schoolYear } = this.state;

    if (parseInt(grade) > 0 && parseInt(grade) < 5) {
      let newGrade = schoolYear.juniorSchool.filter(
        grd => grd.grade !== grade && grd.subGrade !== subGrade
      );
      this.setState({
        schoolYear: { ...this.state.schoolYear, juniorSchool: newGrade }
      });
    }
    // if (parseInt(grade) > 4 && parseInt(grade) < 8) {
    //   let newGrade = students.filter(stu => stu._id !== id);
    // }
    // if (parseInt(grade) > 7 && parseInt(grade) < 13) {
    //   let newGrade = students.filter(stu => stu._id !== id);
    // }
  };
  handleTakeGrade = (grade, subGrade) => {
    const { schoolYear } = this.state;

    if (parseInt(grade) > 0 && parseInt(grade) < 5) {
      let newGrade = schoolYear.juniorSchool.filter(
        grd => grd.grade === grade && grd.subGrade === subGrade
      );
      this.setState({
        students: newGrade[0].students,
        teacher: newGrade[0].teacher,
        grade: newGrade[0].grade,
        subGrade: newGrade[0].subGrade,
        editModel:true
      });
    }
    if (parseInt(grade) > 4 && parseInt(grade) < 8) {
      let newGrade = schoolYear.interSchool.filter(
        grd => grd.grade === grade && grd.subGrade === subGrade
      );
      this.setState({
        students: newGrade[0].students,
        teacher: newGrade[0].teacher,
        grade: newGrade[0].grade,
        subGrade: newGrade[0].subGrade,
        editModel:true
      });
    }
    if (parseInt(grade) > 7 && parseInt(grade) < 13) {
      let newGrade = schoolYear.highSchool.filter(
        grd => grd.grade === grade && grd.subGrade === subGrade
      );
      this.setState({
        students: newGrade[0].students,
        teacher: newGrade[0].teacher,
        grade: newGrade[0].grade,
        subGrade: newGrade[0].subGrade,
        editModel:true
      });
    }
  };
  handleEditGrade=()=>{
    const {
      teacher,
      grade,
      subGrade,
      students,
      schoolYear,
      editModel
    } = this.state;

    let newGrade={
      grade:grade,
      subGrade:subGrade,
      teacher:teacher,
      students:students,
    }
    if (parseInt(grade) > 0 && parseInt(grade) < 5) {
      let grades = schoolYear.juniorSchool.filter(
          grd => grd.grade !== grade && grd.subGrade !== subGrade
      );
     console.log(grades)
    }
    if (parseInt(grade) > 4 && parseInt(grade) < 8) {
      let newGrade = schoolYear.interSchool.filter(
          grd => grd.grade === grade && grd.subGrade === subGrade
      );

    }
    if (parseInt(grade) > 7 && parseInt(grade) < 13) {
      let newGrade = schoolYear.highSchool.filter(
          grd => grd.grade === grade && grd.subGrade === subGrade
      );

    }
  }
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
