import './Header.css'
import './Header-Breakpoints.css'
import logo from '../../assets/Ethaniel-Snow-Logo-white-cropped.png';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {


    // This should probably be useing useState or something but that was causing issues and this seems to work fine
    let size = 'Splash';

    let location = useLocation();
    // console.log(location);

    const page = location.pathname;

    if (page === '/') {
        size = 'Splash';
    }
    else {
        size = 'Compact';
    }

    return (

       <header  className={`header${size}`}>
            <Link to='/' className={`navLogoLink${size}`}>
                <div className={`navLogoBox${size}`} id='navLogoBox'>
                    <img src={logo} alt="Ethaniel Snow Logo" id={`navLogo${size}`}></img>
                    <span className={`navLogoText${size}`} id='navLogoText'>ETHANIEL SNOW</span>
                </div>
            </Link>
            <nav className={`nav${size}`}>
                <ul>
                    <li className='navButton'
                        id='navAbout'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className={`navBuffer${size}`}></li>
                    <li className='navButton'
                        id='navGallery'>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li className={`navBuffer${size}`}></li>
                    <li className={`navBuffer${size}`}></li>
                    <li className={`navBuffer${size}`}></li>
                    <li className='navButton'
                        id='navCV'>
                        <NavLink to='/cv'>CV</NavLink>
                    </li>
                    <li className={`navBuffer${size}`}></li>
                    <li className='navButton'
                        id='navContact'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
       </header>
    );
};

export default Header;