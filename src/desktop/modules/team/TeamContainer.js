import React from 'react';
import TeamCss from './TeamCss.module.css';
import Georgi from '../../../images/georgi.jpg';
import Nikola from '../../../images/nikola.jpg';
import {Helmet} from "react-helmet";


const TeamContainer=()=>{

    return(
        <div className={TeamCss.container}>
             <Helmet>
                <meta charSet="utf-8" />
                <title>За Основателите</title>
                <link rel="canonical" href="http://mysite.com/example" />
        
                 {/* General tags */}
            
                <meta name="description" content="description" />
                {/* OpenGraph tags */}
                <meta name="og:url" content="URL" />
                <meta name="og:title" content="title" />
                <meta name="og:description" content="og:description" />
                <meta name="og:image" content={Nikola} />
                <meta name="og:type" content="website" />
                <meta name="fb:app_id" content="facebook" />
                {/* Twitter Card tags */}
                <meta name="twitter:title" content="twitter title" />
                <meta name="twitter:description" content="twiter desc" />
                <meta name="twitter:image" content={Nikola} />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:creator"
                    content="Twitter creater"
                />
            </Helmet>
            <div className={TeamCss.container_title}>Разработчици на приложението</div>
            <section className={TeamCss.description_container}>
                <img src={Georgi} className={TeamCss.picture} />
                <div className={TeamCss.description_form}>
                    <p >
                        Георги Мърценков е роден на 6 декември 1999 година.  
                    </p>
                    <p>
                        От 2018 година следва специалност
                        Бизнес Информационни Технологии във факултета по Математика и Информатика на Пловдивския
                         Университет Паисий Хилендарски.
                    </p> 
                    <p>
                       JUNIOR MERN STACK developer от края  на 2019 година.
                    </p> 
                </div>
            </section>
            <section className={TeamCss.description_container}>
            <div className={TeamCss.description_form}>
                    <p >
                    Никола Николчов е роден на 11 февруари 1998 година.
                    </p>
                    <p>
                        От 2017 година следва специалност
                    Бизнес Информационни Технологии във факултета по Математика и Информатика на Пловдивския
                     Университет Паисий Хилендарски.
                    
                    </p> 
                    <p>
                       JUNIOR MERN STACK developer от края  на 2019 година.
                    </p> 
                </div>
               
                <img src={Nikola} className={TeamCss.picture}/>
            </section>
        </div>
    );

}
export default TeamContainer;