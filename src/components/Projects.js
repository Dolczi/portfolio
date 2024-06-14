import React from 'react'
import './Projects.css'
import { useTranslation } from 'react-i18next';


const Projects = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className='projects' id='projects'>
            <h2 className='title'>
            {t("projects.title")}
            </h2>
            <div className='content'>
                <div className='project'>
                    <img src={require('./img/project.jpg')} alt='project a'/>
                    <h3 className='projectTitle'>{t("projects.titleA")}</h3>
                    <p className='projectDescription'>{t("projects.descriptA")}</p>
                    <a href='/' className='link'>{t("projects.source")}</a>
                </div>
                <div className='project'>
                    <img src={require('./img/project.jpg')} alt='project b'/>
                    <h3 className='projectTitle'>{t("projects.titleB")}</h3>
                    <p className='projectDescription'>{t("projects.descriptB")}</p>
                    <a href='/' className='link'>{t("projects.source")}</a>
                </div>
                <div className='project'>
                    <img src={require('./img/project.jpg')} alt='project c'/>
                    <h3 className='projectTitle'>{t("projects.titleC")}</h3>
                    <p className='projectDescription'>{t("projects.descriptC")}</p>
                    <a href='/' className='link'>{t("projects.source")}</a>
                </div>
            </div>
        </div>
    )
}

export default Projects