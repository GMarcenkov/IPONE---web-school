import React from "react";
import Subjects from "./Subjects.module.css";
import SubjectsTableHeader from "./components/SubjectsTableHeader";
import SubjectsTableRow from "./components/SubjectsTableRow";
class SubjectsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects:{
        userId:'Jkjm34jJn34knH43',
        yearFrom:2019,
        yearTo:2020,
        grade:3,
        subGrade:'a',
        subjects:[
          {
            subject:'Математика',
            teacher:'Стефани Кангалова',

          }
        ]
      }
    };
  }

  render() {
    return (
      <div className={Subjects.subjects_container_holder}>
        <div className={Subjects.subjects_container_title}>
          Предмети за учебната 2019/2020 година
        </div>
          <div>
            <SubjectsTableHeader/>
            <SubjectsTableRow/>
          </div>
      </div>
    );
  }
}

SubjectsContainer.propTypes = {};

export default SubjectsContainer;
