import React from "react";
import YearCreate from "./components/YearCreate.module.css";
import Year from "./components/year/Year";
import axios from "axios";
import CreateGradeContainer from "./components/CreateGradeContainer";
import GradeListContainer from "./components/GradeListContainer";
import slugify from "slugify";

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
      newUsers: [],
      addStudent: "",
      filterByName: false,
      search: [],
      grades: [],
      request:''
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
    const { teacher, grade, subGrade, students, grades } = this.state;
    let NewGrade = {
      grade: parseInt(grade),
      subGrades: [
        {
          subGrade: subGrade,
          teacher: teacher,
          students: students
        }
      ]
    };
    let haveGrade = {
      subGrade: subGrade,
      teacher: teacher,
      students: students
    };

    let filterGrades = grades.filter(grade => grade.grade === NewGrade.grade);

    if (grades.length === 0) {
      grades.push(NewGrade);
    } else {
      if (filterGrades.length > 0) {
        grades.map((grade, index) => {
          if (grade.grade === NewGrade.grade) {
            if (
              grade.subGrades.filter(
                subGrade => subGrade.subGrade === haveGrade.subGrade
              ).length === 0
            ) {
              grades[index].subGrades.push(haveGrade);
            }
          }
        });
      } else {
        grades.push(NewGrade);
      }
    }

    this.setState({ students: [], teacher: [] });
    localStorage.setItem("schoolYear", JSON.stringify(this.state.grades));
  };
  handleDeleteStudent = student => {
    const { students, users } = this.state;
    let newStudents = students.filter(stu => stu._id !== student._id);
    users.push(student);
    this.setState({ students: newStudents });
  };
  handleDeleteGrade = () => {
    const { grades, editGrade,subGrade } = this.state;
    let index_of_grade = grades.findIndex(
        grade => grade.grade === editGrade.grade
    );
    let allGrades=grades

    allGrades[index_of_grade].subGrades = allGrades[
        index_of_grade
        ].subGrades.filter(
        subGrades => subGrades.subGrade !== editGrade.subGrade
    );
    allGrades = allGrades.filter(
        grade => grade.subGrades.length!==0
    );

    this.setState({
      grades: allGrades,
      editModel: false
    });
  };
  handleTakeGrade = (grade, subGrade, teacher, students) => {
    const { grades } = this.state;
    let editGrade = {
      grade: grade.grade,
      subGrade: subGrade,
      teacher: teacher,
      students: students
    };
    this.setState({
      editGrade: editGrade,
      teacher: teacher,
      students: students,
      editModel: true
    });
  };
  handleEditGrade = () => {
    const {
      teacher,
      grade,
      subGrade,
      students,
      grades,
      editGrade
    } = this.state;

    let NewGrade = {
      grade: parseInt(grade),
      subGrades: [
        {
          subGrade: subGrade,
          teacher: teacher,
          students: students
        }
      ]
    };
    let haveGrade = {
      subGrade: subGrade,
      teacher: teacher,
      students: students
    };
    let allGrades = grades;

    let index_of_grade = grades.findIndex(
      grade => grade.grade === editGrade.grade
    );
    let index_of_next_grade = grades.findIndex(
        grade => grade.grade === NewGrade.grade
    );

    if (editGrade.grade === NewGrade.grade && editGrade.subGrade === subGrade) {
      let forEdit = allGrades[index_of_grade].subGrades.filter(
        grade => grade.subGrade !== subGrade
      );

      allGrades[index_of_grade].subGrades = forEdit;

      allGrades[index_of_grade].subGrades.push(haveGrade);
      this.setState({
        grades: allGrades,
        editModel: false
      });
    } else {
      if (
        grades[index_of_next_grade].subGrades.filter(
          subGrade => subGrade.subGrade === haveGrade.subGrade
        ).length === 0
      ) {

        allGrades[index_of_grade].subGrades = allGrades[
          index_of_grade
          ].subGrades.filter(
          subGrades => subGrades.subGrade !== editGrade.subGrade
      );
        let forEdit = allGrades[index_of_grade].subGrades.filter(
          grade => grade.subGrade !== subGrade
        );

        allGrades[index_of_grade].subGrades = forEdit;



        allGrades[index_of_next_grade].subGrades.push(haveGrade);
        allGrades = allGrades.filter(grade => grade.subGrades.length !== 0);

        this.setState({
          grades: allGrades,
          editModel: false
        });
        console.log("new", allGrades);
      }
      if (grades.filter(grade => grade.grade === NewGrade.grade).length === 0) {
        let forEdit = allGrades[index_of_grade].subGrades.filter(
          grade => grade.subGrade !== subGrade
        );
        allGrades[index_of_grade].subGrades = forEdit;
        allGrades.push(NewGrade);
        allGrades = allGrades.filter(grade => grade.subGrades.length !== 0);
        this.setState({
          grades: allGrades,
          editModel: false
        });
        console.log("new", allGrades);
      }
    }
    this.setState({ students: [], teacher: "" });
    localStorage.setItem("schoolYear", JSON.stringify(this.state.grades));
  };
  handleCreateSchoolYear = () => {
    const { grades, yearFrom, yearTo } = this.state;
    const year = {
      yearFrom: yearFrom,
      yearTo: yearTo,
      grades: grades
    };

    axios.post("http://localhost:5000/schoolYear/add", year).catch(e => {
      this.setState({ request: "Failed to create" });
    });
    if(this.state.request===''){
      window.location='/admincp/years'
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
      grades,
      editModel,
      newUsers
    } = this.state;
    return (
      <div className={YearCreate.year_container}>
        <div className={YearCreate.year_title_border}>
          <div className={YearCreate.year_create_title}>
            Създаване на учебна година
          </div>
          <Year
            handleCreateSchoolYear={this.handleCreateSchoolYear}
            yearFrom={yearFrom}
            yearTo={yearTo}
            handleInput={this.handleInput}
          />
        </div>
        <div className={YearCreate.year_holder}>
          <GradeListContainer
            grades={grades}
            handleTakeGrade={this.handleTakeGrade}
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
