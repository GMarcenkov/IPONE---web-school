import React from 'react';
import TeamCss from './TeamCss.module.css';
import Georgi from '../../../images/georgi.jpg';
import Nikola from '../../../images/nikola.jpg';

const TeamContainer=()=>{

    return(
        <div className={TeamCss.container}>
            <div className={TeamCss.container_title}>Разработчици на приложението</div>
            <section className={TeamCss.description_container}>
                <img src={Georgi} className={TeamCss.picture} />
                <div className={TeamCss.description_form}>
                    <p >
                        Георги Мърценков е роден на 6 декември 1999 година.  
                    </p>
                    <p>
                        От 2018 година следва специалност
                        Бизнес Информационни Технологий във факултета по Матемтика и Информатина на Пловдивския Университет Паисий Хилендарски.
                    </p> 
                    <p>
                        MERN STACK developer от края  на 2019 година.
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
                    Бизнес Информационни Технологий във факултета по Матемтика и Информатина на Пловдивския Университет Паисий Хилендарски.
                    MERN STACK developer от края  на 2019 година.
                    </p> 
                    <p>
                        MERN STACK developer от края  на 2019 година.
                    </p> 
                </div>
               
                <img src={Nikola} className={TeamCss.picture}/>
            </section>
        </div>
    );

}
export default TeamContainer;