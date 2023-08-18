
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import './index.css';
import { NavBar } from './NavBar';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faMeta} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PopUp } from './PopUp';




function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      
  <div className='  mt-0 bg-gradient-to-r from-blue-100 via-gray-200 via-teal-200 to-purple-300 animate-background'>
      <header>
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/services' Component={Services}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        </Routes>
        
        <NavBar/>
       <PopUp/>
       
      </header>
    
      
    
    <footer className=' justify-center border border-gray-700 bg-gray-500 p-5'>
      <div className='flex flex-wrap flex-col'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a  target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100091953343560" className='p-2'><FontAwesomeIcon icon={faMeta}/> &nbsp; Meta</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="https://github.com/m-e-nX" target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faGithub}/>&nbsp;Github
      </a>
      <a href="mailto:edupablo72@gmail.com" className='p-2'>
        <FontAwesomeIcon icon={faEnvelope}/>&nbsp;
        Email</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a target='_blank' rel="noreferrer" href='https://ke.linkedin.com/' className='p-2'>
        <FontAwesomeIcon icon={faLinkedin}/>&nbsp;
        linkedn</a>
      </div>
      
    <p className=" text-center text-sm">
        &copy; {currentYear} Mburu. All rights reserved.
      </p>
    </footer>
    </div>
    
    </Router>
  
  );
}

export default App;
