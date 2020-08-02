import React from "react";
import axios from "axios";
import "./components/ProductCreate.css";
import slugify from "slugify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import StudentsTableHeader from "../yearCreate/components/addStudents/components/StudentsTableHeader";
import StudentsTableRow from "../yearCreate/components/addStudents/components/StudentsTableRow";
class ProductCreateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterByName: false,
      users: [
        {
          _id: 1,
          username: "9912067262",
          name: "Иван",
          secondName: "Башков",
          familyName: "Георгиев",
          phone:"0876825221",
          email:"ivangeorgiev456@abvbg"
        },
        {
          _id: 2,
          username: "9912064356",
          name: "Анна-Мария",
          secondName: "Христова",
          familyName: "Донкова"
        },
        {
          _id: 3,
          username: "9912065437",
          name: "Мария",
          secondName: "Георгиева",
          familyName: "Маданска"
        }
      ],
      search: [],
      addStudent: "",
      title: "",
      yearFrom: "",
      yearTo: "",
      grade: 1,
      subGrade: "а",
      teacher: "",
      quantity: 0,
      countStudents: 0,
      students: [
        {
          username: "9912067268",
          name: "Георги",
          secondName: "Томов",
          familyName: "Мърценков"
        }
      ],
      categories: [],
      subcategories: [],
      isLoading: true,
      errors: {},
      error: ""
    };
  }

  componentDidMount() {
    this.handleGetCategory();
    this.handleGetUsers();
  }
  handleInput = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleChangeParent = parent => {
    this.setState({ category_title: parent.label });
  };
  handleGetUsers = async () => {
    await axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function(error) {});
  };
  handleGetCategory = async () => {
    await axios
      .get("http://localhost:5000/category/")
      .then(response => {
        response.data.map(category => {
          this.handleBuildCategory(category, response.data);
        });
        this.state.subcategories.map(sub => {
          if (!sub.parent_id) {
            this.state.categories.push(sub);
          }
        });
        this.setState({ isLoading: false });
      })
      .catch(function(error) {});
  };
  handleBuildCategory = (category, categories) => {
    let result = categories.filter(sub => sub.parent_id === category._id);

    if (result.length > 0) {
      category.subcategory = result;
      this.state.subcategories.push(category);
    } else {
      if (!category.parent_id) {
        this.state.subcategories.push(category);
      }
    }
  };
  validateForm = data => {
    const error = {};

    if (data.title.length < 3) {
      error.title = "Името е твърде късо.";
    }
    if (data.price < 1) {
      error.price = "Липсва цена.";
    }
    if (data.category_title.length < 3) {
      error.category = "Изберете категория.";
    }
    if (data.weight < 1) {
      error.weight = "Добавете тегло.";
    }
    if (data.sku < 1) {
      error.sku = "Добавете SKU.";
    }
    if (data.quantity < 1) {
      error.quantity = "Добавете бройка.";
    }
    if (data.imageLink < 1) {
      error.imageLink = "Добавете снимка.";
    }
    return error;
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
  handleSubmit = () => {
    const { title, yearFrom,yearTo, students, teacher, quantity,grade,subGrade } = this.state;
    // const errors = this.validateForm(this.state);
    // const isValid = Object.values(errors).filter(Boolean).length <= 0;
    // if (!isValid) {
    //   this.setState({ errors: errors });
    //   return;
    // }
    // this.setState({ request: "" });
    const subject = {
      title: title,
      grade:grade,
      subGrade:subGrade,
      yearFrom: yearFrom,
      yearTo:yearTo,
      students: students,
      teacher: teacher,
      quantity: quantity,
      slug: slugify(title, { lower: true, remove: /[():.@><,_{}]/g })
    };
    console.log(subject)
    // axios
    //   .post("http://localhost:5000/products/add", subjectCard)
    //   .then(res =>
    //     this.setState({
    //       title: "",
    //       years: 0,
    //       students: [],
    //       teacher: "",
    //       quantity: 0
    //     })
    //   )
    //   .catch(error =>
    //     this.setState({ error: "Името или SKU на пеодукта е вече използвано." })
    //   );
  };
  render() {
    const {
      title,
      teacher,
      yearFrom,
      yearTo,
      subGrade,
      grade,
      errors
    } = this.state;
    return (
      <div className="create_product">
        <div className="form_row">
          <div className="row">
            {" "}
            <div className="form_body">
              <div>
                <div className="text_year">Наименование на предмета</div>
                <input
                  className="form_input"
                  name="title"
                  type="text"
                  onChange={this.handleInput}
                  value={title}
                />
                <div style={{ color: "red" }}>
                  {errors.category ? errors.category : ""}
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="text_year">Учител</div>
              <input
                className="form_input"
                name="teacher"
                type="text"
                onChange={this.handleInput}
                value={teacher}
              />
              <div style={{ color: "red" }}>
                {errors.discount_price ? errors.discount_price : ""}
              </div>
            </div>
          </div>
        </div>

        <div className="form_row">
          <div className="row">
            <div>
              <div className="text_year">Година на обучение</div>
              <div className="row">
                <div>
                  <div>ОТ:</div>
                  <input
                    className="form_year"
                    name="yearFrom"
                    type="text"
                    onChange={this.handleInput}
                    value={yearFrom}
                  />
                  <div style={{ color: "red" }}>
                    {errors.sku ? errors.sku : ""}
                  </div>
                </div>
                <div className="year_split">/</div>
                <div className="form_body">
                  <div>ДО:</div>
                  <input
                    className="form_year"
                    name="yearTo"
                    type="text"
                    onChange={this.handleInput}
                    value={yearTo}
                  />
                  <div style={{ color: "red" }}>
                    {errors.sku ? errors.sku : ""}
                  </div>
                </div>
              </div>
            </div>
            <div className="form_class">
              <div className="row">
                <div className="form_body">
                  <div className="text_year">Клас</div>
                  <select className="input_class" o onChange={this.handleInput}>
                    <option name="grade" value={1}>
                     1 клас
                    </option>
                    <option name="grade" value={2}>
                      2 клас
                    </option>
                    <option name="grade" value={3}>
                      3 клас
                    </option>
                    <option name="grade" value={4}>
                      4 клас
                    </option>
                    <option name="grade" value={5}>
                      5 клас
                    </option>
                    <option name="grade" value={6}>
                      6 клас
                    </option>
                    <option name="grade" value={7}>
                      7 клас
                    </option>
                    <option name="grade" value={8}>
                      8 клас
                    </option>
                    <option name="grade" value={9}>
                      9 клас
                    </option>
                    <option name="grade" value={10}>
                      10 клас
                    </option>
                    <option name="grade" value={11}>
                      11 клас
                    </option>
                    <option name="grade" value={12}>
                      12 клас
                    </option>
                  </select>
                  <div style={{ color: "red" }}>
                    {errors.quantity ? errors.quantity : ""}
                  </div>
                </div>
                <div className="form_body">
                  <div className="text_year">Подклас</div>
                  <select className="input_class" onChange={this.handleInput}>
                    <option name="subGrade" value={"а"}>
                     А
                    </option>
                    <option name="subGrade" value={"б"}>
                     Б
                    </option>
                    <option name="subGrade" value={"в"}>
                      В
                    </option>
                  </select>
                  <div style={{ color: "red" }}>
                    {errors.quantity ? errors.quantity : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form_row">
          <div className="text_year">Добави ученици</div>
          <div className="row">
            <input
              className="form_addStu"
              placeholder="Търси ученик"
              name="addStudent"
              type="text"
              onChange={this.handleSearch}
              value={this.state.addStudent}
            />
            <div>
              <div className="form_filter">
                {this.state.filterByName ? (
                  <FontAwesomeIcon
                    className="form_filter"
                    icon={faSquare}
                    onClick={this.handleChangeFilter}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="form_filter"
                    icon={faCheckSquare}
                    onClick={this.handleChangeFilter}
                  />
                )}
                Търси по ЕГН
              </div>
              <div className="form_filter">
                {this.state.filterByName ? (
                  <FontAwesomeIcon
                    className="form_filter"
                    icon={faCheckSquare}
                    onClick={this.handleChangeFilter}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="form_filter"
                    icon={faSquare}
                    onClick={this.handleChangeFilter}
                  />
                )}
                Търси по Име,Презиме,Фамилия
              </div>
            </div>
          </div>
          <div className="form_search">
            <table>
              <tbody>
              {this.state.search.map(stu => (
                  <tr className="search_row">
                    <td>{stu.name}</td>
                    <td>{stu.secondName}</td>
                    <td>{stu.familyName}</td>
                    <td>{stu.username}</td>
                    <td>
                      <button  className="stu_add" onClick={() => this.handleAddStudent(stu)}>
                        Добави
                      </button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div style={{ color: "red" }}>
            {errors.quantity ? errors.quantity : ""}
          </div>
          <div style={{ "margin-top": "100px" }}>
            Учащи
            <table>
              <StudentsTableHeader />
              <tbody>
                {this.state.students.reverse().map(student => (
                  <StudentsTableRow student={student} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button className="create_button" onClick={this.handleSubmit}>
          Създай
        </button>

        <div>{this.state.error}</div>
      </div>
    );
  }
}

ProductCreateContainer.propTypes = {};

export default ProductCreateContainer;
