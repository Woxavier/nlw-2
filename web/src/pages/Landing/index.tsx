import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import GivenclassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import {Link} from 'react-router-dom'
import api from '../../services/api';

export default function Landing(){
    const [totalConnections, SetTotalconnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response => {
            const {total} = response.data

            SetTotalconnections(total)
        })
    }, [])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt=""/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className='give-classes'>
                        <img src={GivenclassesIcon} alt=""/>
                        Dar aulas
                    </Link>
                </div>

                <span className='total-connections'>
                    Total de {totalConnections} conexões realizadas <img src={PurpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}