import './Footer.css'
import './Footer-Breakpoints.css'
import { useLocation, NavLink } from 'react-router-dom';
import imdb from '../../assets/imdb_logo.png'
import dgc from '../../assets/DGC-Logo-White-BlackBG-small.webp'

const Footer = () => {

    // This should probably be useing useState or something but that was causing issues and this seems to work fine
    let display = 'Yes';

    let location = useLocation();
    // console.log(location);

    if (location.pathname === '/contact' || location.pathname === '/' || location.pathname === 'ethan-site') {
        display = 'No';
    }
    else {
        display = 'Yes';
    }

    return (

            <footer className={`footer${display}`}>
                    <div className={`footerItem${display}`} id={`phoneNumber${display}`}>+1 (647) 220-3430</div>
                    <div className={`footerItem${display}`} id={`email${display}`}>esnow272@gmail.com</div>
                    <div className={`footerItem${display}`} id={`socialMedia${display}`}>
                        <NavLink    to='https://www.imdb.com/name/nm13072965/'
                                    target="_blank"
                                    rel="noopener noreferrer">
                        <img src={imdb} alt="IMDB Logo" className='logoLink'></img>
                        </NavLink>
                        <NavLink    to='https://www.dgc.ca/en/profile-public-view/VTJGc2RHVmtYMStaUXcvdE0wRnRPSVR1VDkySjBUcjVvY1ZzcDYzcHVDcz0%3D'
                                    target="_blank"
                                    rel="noopener noreferrer">
                        <img src={dgc} alt="Director's Guild of Canda Logo" className='logoLink' style={{outline: '0.25px solid #ffffff'}}></img>
                        </NavLink>
                    </div>
            </footer>

    );
};

export default Footer;