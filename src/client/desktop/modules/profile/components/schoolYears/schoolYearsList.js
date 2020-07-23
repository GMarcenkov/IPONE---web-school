import React from 'react';
import PropTypes from 'prop-types';
import Years from './Years.module.css';
import {Link} from "react-router-dom";

const SchoolYearsList = ({years}) => {
    return (
        <div className={Years.school_years_container}>
            <div className={Years.title}  >
                Учебни години
            </div>
            <div className={Years.years_list_container}>
                {
                    years.map(year=>(
                        <Link to={`/subjects/${year.yearFrom}`}>
                            <div className={Years.year_banner}>
                                <div className={Years.year}>
                                    {year.yearFrom}/{year.yearTo}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

SchoolYearsList.propTypes = {

};

export default SchoolYearsList;
