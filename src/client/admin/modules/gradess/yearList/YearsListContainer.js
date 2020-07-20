import React from "react";
import "./components/YearsList.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faSquare} from "@fortawesome/free-solid-svg-icons";

class YearsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [
        { id: 1, yearFrom: 2019, yearTo: 2020 },
        { id: 2, yearFrom: 2019, yearTo: 2020 },
        { id: 1, yearFrom: 2019, yearTo: 2020 },
        { id: 2, yearFrom: 2019, yearTo: 2020 },
        { id: 1, yearFrom: 2019, yearTo: 2020 },
        { id: 2, yearFrom: 2019, yearTo: 2020 },
      ]
    };
  }
  render() {
    return (
      <div className="years_container">
        <div className="years_container_title">Година на обучение</div>
        <div className="years_list">
          {this.state.years.map(year => (
            <Link
              className="year_form"
             to={`/admincp/grade/${year.yearFrom}`}
            >
              <div className="year_banner">
                {year.yearFrom}/{year.yearTo}
              </div>

            </Link>
          ))}
          <Link
              className="year_form_add"
              to={`/admincp/year/create`}
          >
            <FontAwesomeIcon
                className="add_banner"
                icon={faPlus}
            />
            {/*<div className="add_banner">*/}
            {/*  Създайте учебна година*/}
            {/*</div>*/}

          </Link>
        </div>
      </div>
    );
  }
}

YearsListContainer.propTypes = {};

export default YearsListContainer;
