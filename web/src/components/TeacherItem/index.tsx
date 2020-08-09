import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export interface Teacher{
    avatar: string
    bio: string
    cost: number
    id: 2
    name: string
    subject: string
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Winicius Xavier"/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$: {teacher.cost},00</strong>
                </p>

                <button type='button'>
                    <img src={whatsappIcon} alt={teacher.name}/>
                    Entrar em contato
                </button>
            </footer>
                </article>
    )
}

export default TeacherItem;