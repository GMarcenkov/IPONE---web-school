import React from 'react';
import NavBar from "../../modules/layout/navBar/NavBar";
import Footer from "../../modules/layout/footer/Footer";
import TeamContainer from '../../modules/team/TeamContainer';
import {Helmet} from "react-helmet";

const TeamPage=()=>{

    return(
        <div>
             <Helmet>
                        <title>LOGIN</title>
                        <meta property="og:description"   content=" te tova e opisanieto " />
                        <meta property="og:description"   content=" te tova e opisanieto " />
            </Helmet>
            <NavBar/>
            <TeamContainer/>
            <Footer/>
        </div>
    )
}

export default TeamPage;