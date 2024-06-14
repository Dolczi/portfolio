import React from 'react'
import './Skills.css'
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className='skills' id='skills'>
            <h2 className='title'>
                {t("skills.title")}
            </h2>
            <div className='content'>
                <div className='skill'>
                    <div className='skillImage'>
                        <img src={require('./img/html.png')} alt='html'/>
                    </div>
                    <p>HTML</p>
                </div>
                <div className='skill'>
                    <div className='skillImage'>
                        <img src={require('./img/css.png')} alt='css'/>
                    </div>
                    <p>CSS</p>
                </div>
                <div className='skill'>
                    <div className='skillImage'>
                        <img src={require('./img/react.png')} alt='react'/>
                    </div>
                    <p>React</p>
                </div>
                <div className='skill'>
                    <div className='skillImage'>
                        <img src={require('./img/c.png')} alt='C#'/>
                    </div>
                    <p>C#</p>
                </div>
                <div className='skill'>
                    <div className='skillImage'>
                        <img src={require('./img/python.png')} alt='python'/>
                    </div>
                    <p>Python</p>
                </div>
                <div className='skill'>
                    <div className='skillImage'>
                        <img src={require('./img/django.png')} alt='django'/>
                    </div>
                    <p>Django</p>
                </div>
            </div>
        </div>
    )
}

export default Skills