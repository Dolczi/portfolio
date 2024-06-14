import './Contact.css'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className='contact' id='contact'>
            <p className='message'>{t("contact.message")}</p>
            <ul className='links'>
                <li className='link'>
                    <img src={require('./img/gmail.png')} alt='gmail'/>
                    <a href='mailto:jakub.dolecki2000@gmail.com'>E-mail</a>
                </li>
                <li className='link'>
                    <img src={require('./img/linkedin.png')} alt='linkedin'/>
                    <a href='https://www.linkedin.com/in/jakub-dolecki-bb939927a/'>Linkedin</a>
                </li>
                <li className='link'>
                    <img src={require('./img/github.png')} alt='github'/>
                    <a href='https://github.com/Dolczi/'>Github</a>
                </li>
                <li>
                    <button onClick={() => handleChangeLanguage("en")}>EN</button>
                    <button onClick={() => handleChangeLanguage("pl")}>PL</button>

                </li>
                <li>
                </li>
            </ul>
        </div>
    )
}

export default Contact