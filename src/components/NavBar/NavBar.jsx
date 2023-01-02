import codingLogo from '../../assets/coding.png'
import miniGitLogo from '../../assets/minigit.png'
import miniLinkedinLogo from '../../assets/minilinkedin.png'
import folerSpLogo from '../../assets/downoladsp.png'
import folerEnLogo from '../../assets/downoladen.png'
import cvSpanish from '../../assets/CV_SP_AaronFraga.pdf'
import cvEnglish from '../../assets/CV_EN_AaronFraga.pdf'
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-default">
      <div className='d-flex justify-content-start ms-5 mb-4 mt-4'>
          <img src={codingLogo} alt="" width="40" height="40" className="d-inline-block align-text-top" />
          <div className='d-flex justify-content-around'>
            <Link to='/' className='link'>
              <h3 className='ms-5'>Home</h3>
            </Link>
            <Link to='/about' className='link'>
              <h3 className='ms-4'>About Me</h3>
            </Link>
            <Link to='/contact' className='link'>
              <h3 className='ms-4'>Contact Me</h3>
            </Link>
          </div>
      </div>
        <div className='d-flex justify-content-end me-5'>
          <a href={cvSpanish} target="_blank" >
            <img src={folerSpLogo} alt="githublogo" width="40" height="40" className="d-inline-block align-text-top ms-4" />
          </a>
          <a href={cvEnglish} target="_blank">
            <img src={folerEnLogo} alt="githublogo" width="40" height="40" className="d-inline-block align-text-top ms-4" />
          </a>
          <a href="https://github.com/aronfraga" target="_blank">
            <img src={miniGitLogo} alt="githublogo" width="40" height="40" className="d-inline-block align-text-top ms-4" />
          </a>
          <a href="https://www.linkedin.com/in/aaron-fraga-4036a8244" target="_blank">
            <img src={miniLinkedinLogo} alt="linkedinlogo" width="40" height="40" className="d-inline-block align-text-top ms-4" />
          </a>
        </div>
    </nav>
  )
}

export default NavBar;