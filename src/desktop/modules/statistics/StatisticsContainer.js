import React from "react";
import StatisticsStyle from "./StatisticsStyle.module.css";
class StatisticsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={StatisticsStyle.container}>
        <div className={StatisticsStyle.container_title}>
            Статискика
        </div>
      </div>
    );
  }
}

StatisticsContainer.propTypes = {};

export default StatisticsContainer;
