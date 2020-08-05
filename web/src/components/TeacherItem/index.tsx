import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export default function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/61465346?s=460&u=dda37af3269c0f75a92723a336876b104c177da4&v=4" alt="Winicius Xavier"/>
                <div>
                    <strong>Winicius Xavier</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Salve família
                <br/><br/>
                Se vc quer aprender várias coisas na situação daquele jeito diferenciado, com um professor neguinho
                daquele jeito, chega mais, estaremos forrozeando pelo Brasil. Tô pelos acessos mais não tô acessível!!
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 100,00</strong>
                </p>

                <button type='button'>
                    <img src={whatsappIcon} alt="Ícone do whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
                </article>
    )
}