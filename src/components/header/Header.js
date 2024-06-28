import './Header.css'
import logo from '../../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {


    // This should probably be useing useState or something but that was causing issues and this seems to work fine
    let size = 'Splash';

    let location = useLocation();
    // console.log(location);


    // added the second condition to fix the first load when hosting on github-pages, may remove for final deployment
    if (location.pathname === '/' || location.pathname === 'ethan-site') {
        size = 'Splash';
    }
    else {
        size = 'Compact';
    }

    return (

       <header className={`header${size}`}>
            <Link to='/'><img src={logo} alt="Ethaniel Snow Logo" id={`navLogo${size}`}></img></Link>
            <nav className={`nav${size}`}>
                <ul>
                    <li className='navButton' id='navGallery'><Link to='/gallery'>Gallery</Link></li>
                    <li className={`navBuffer${size}`} ffer></li>
                    <li className='navButton' id='navAbout'><Link to='/about'>About</Link></li>
                    <li className={`navBuffer${size}`}></li>
                    <li className={`navBuffer${size}`}></li>
                    <li className={`navBuffer${size}`}></li>
                    <li className='navButton' id='navCV'><Link to='/cv'>CV</Link></li>
                    <li className={`navBuffer${size}`}></li>
                    <li className='navButton' id='navContact'><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
       </header>
    );
};

export default Header;