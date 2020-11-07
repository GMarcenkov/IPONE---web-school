import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../modules/layout/navBar/NavBar";
import StatisticsContainer from "../../modules/statistics/StatisticsContainer";
import Footer from '../../modules/layout/footer/Footer';


const StatisticsPage = props => {
    if (localStorage.getItem("jwt") === null) {
        {window.location = "/login"}
    }else {
        return (
            <div>
                <NavBar/>
                <StatisticsContainer/>
                <Footer/>
            </div>
        );
    }
};
StatisticsPage.propTypes = {

};

export default StatisticsPage;
