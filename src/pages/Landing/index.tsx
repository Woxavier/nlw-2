import React from 'react';
import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import GivenclassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

export default function Landing(){
    return(
        <div id="page-landing">
            <div id="page-lading-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={StudyIcon} alt=""/>
                        Estudar
                    </a>
                    <a href="" className='give-classes'>
                        <img src={GivenclassesIcon} alt=""/>
                        Estudar
                    </a>
                </div>

                <span className='total-connections'>
                    Total de 200 conexões realizadas <img src={PurpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}