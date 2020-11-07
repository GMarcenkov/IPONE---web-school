import React from 'react';
import NavBar from "../../modules/layout/navBar/NavBar";
import Footer from "../../modules/layout/footer/Footer";
import TeamContainer from '../../modules/team/TeamContainer';


const TeamPage=()=>{

    return(
        <div>
            <NavBar/>
            <TeamContainer/>
            <Footer/>
        </div>
    )
}

export default TeamPage;