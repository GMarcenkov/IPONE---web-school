import SchoolYearsList from "./schoolYears/schoolYearsList";
import React from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

class SchoolYearsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years: []
    };
  }
  componentDidMount() {
    this.handleGetSchoolYears();
  }
  handleGetSchoolYears = async () => {
    let user = jwt_decode(localStorage.getItem("jwt"));
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/grade/${user.id}`)
      .then(response => {
        let years = response.data.filter(year => year !== null);
       years.sort(function (a, b) {
          if (a.grade < b.grade) return -1;
          else if (a.grade > b.grade) return 1;
          return 0;
        })
        this.setState({ years: years });
      })
      .catch(function(error) {});
  };
  render() {
    const { years } = this.state;
    return (
      <div>
        <SchoolYearsList years={years} />
      </div>
    );
  }
}

SchoolYearsContainer.propTypes = {};

export default SchoolYearsContainer;
