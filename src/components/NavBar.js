import React, {useState} from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [t, i18n] = useTranslation("global");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='navbar'>
            <a className='title' href='/'>Portfolio</a>
            <div className='menu'>
                <div className='menuButton' onClick={toggleMenu}>
                    {menuOpen ? 'Close' : 'Menu'}
                </div>
                <ul className={`menuItems ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <button onClick={() => {
                            const element = document.getElementById('about');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            }); 
                            }}
                        >
                            {t("navbar.aboutBtn")}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            const element = document.getElementById('skills');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            }); 
                            }}
                        >
                            {t("navbar.skillsBtn")}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            const element = document.getElementById('projects');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            }); 
                            }}
                        >
                            {t("navbar.projectsBtn")}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            const element = document.getElementById('contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            }); 
                            }}
                        >
                            {t("navbar.contactBtn")}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar