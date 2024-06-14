import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className='about' id='about'>
            <div className='content'>
                <h1 className='title'>
                    {t("about.title")}
                </h1>
                <p className='description'>
                    {t("about.message")}
                </p>
            </div>
            <img 
                src={require('./img/me.jpg')} 
                alt='this is me'
                className='photo'
            />
        </div>
    )
}

export default About