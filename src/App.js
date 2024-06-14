import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CookieConsent from './components/CookieConsent';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <div className="App">
      <NavBar />
      {!cookies.cookieConsent && <CookieConsent />}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
