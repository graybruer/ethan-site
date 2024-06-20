import './Header.css'
import logo from '../../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {


    // This should probably be useing useState or something but that was causing issues and this seems to work fine
    let page = 'Splash';

    let location = useLocation();
    // console.log(location);

    if (location.pathname === '/') {
        page = 'Splash';
    }
    else {
        page = 'Compact';
    }

    return (

       <header className={`header${page}`}>
            <Link to='/'><img src={logo} alt="Ethaniel Snow Logo" id={`navLogo${page}`}></img></Link>
            <nav className={`nav${page}`}>
                <ul>
                    <li className='navButton' id='navGallery'>Gallery</li>
                    <li className={`navBuffer${page}`}></li>
                    <li className='navButton' id='navAbout'><Link to='/about'>About</Link></li>
                    <li className={`navBuffer${page}`}></li>
                    <li className={`navBuffer${page}`}></li>
                    <li className={`navBuffer${page}`}></li>
                    <li className='navButton' id='navCV'>CV</li>
                    <li className={`navBuffer${page}`}></li>
                    <li className='navButton' id='navContact'>Contact</li>
                </ul>
            </nav>
       </header>
    );
};

export default Header;