import React from "react";
import Subjects from "./Subjects.module.css";
import SubjectsTableHeader from "./components/SubjectsTableHeader";
import SubjectsTableRow from "./components/SubjectsTableRow";
class SubjectsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolYear: {
        userId: "Jkjm34jJn34knH43",
        yearFrom: 2019,
        yearTo: 2020,
        grade: 3,
        subGrade: "a",
        subjects: [
          {
            subject: "Математика",
            teacher: "Стефани Кангалова",
            rateFirstTerm: [6, 6, 6, 6, 6, 6],
            rateSecondTerm: [6, 6, 6, 6, 6, 6],
            finalRate:4,
            average:4.5
          },
          {
            subject: "Математика",
            teacher: "Стефани Кангалова",
            rateFirstTerm: [6, 6, 6, 6, 6, 6],
            rateSecondTerm: [6, 6, 6, 6, 6, 6],
            finalRate:4,
            average:4.5
          },
          {
            subject: "Математика",
            teacher: "Стефани Кангалова",
            rateFirstTerm: [6, 6, 6, 6, 6, 6],
            rateSecondTerm: [6, 6, 6, 6, 6, 6],
            finalRate:4,
            average:4.5
          },
          {
            subject: "Математика",
            teacher: "Стефани Кангалова",
            rateFirstTerm: [6, 6, 6, 6, 6, 6],
            rateSecondTerm: [6, 6, 6, 6, 6, 6],
            finalRate:4,
            average:4.5
          }
        ]
      }
    };
  }

  render() {
    const{schoolYear}=this.state;
    return (
      <div className={Subjects.subjects_container_holder}>
        <div className={Subjects.subjects_container_title}>
          Предмети за учебната 2019/2020 година
        </div>
        <div className={Subjects.subjects_container_title}>
          {schoolYear.grade}. клас
        </div>
        <div className={Subjects.list_container}>
          <table>
            <SubjectsTableHeader />
            <tbody>
            {
              schoolYear.subjects.map(subject=>(
                  <SubjectsTableRow schoolYear={schoolYear} subject={subject}/>
              ))
            }
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

SubjectsContainer.propTypes = {};

export default SubjectsContainer;
