import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import logoimage from '../../assets/images/logo.svg'
import BackIcon from '../../assets/images/icons/back.svg'

interface PageHeaderProps{
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className='page-header'>
                <div className="top-bar-container">
                    <Link to='/'>
                        <img src={BackIcon} alt=""/>
                    </Link>
                    <img src={logoimage} alt=""/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p>}

                    {props.children}
                </div>

        </header>
    )

}

export default PageHeader;