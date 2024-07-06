import './Footer.css'
import './Footer-Breakpoints.css'
import { useLocation } from 'react-router-dom';

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
                    <div className={`footerItem${display}`} id={`phoneNumber${display}`}>647 220-3430</div>
                    <div className={`footerItem${display}`} id={`email${display}`}>esnow272@gmail.com</div>
                    <div className={`footerItem${display}`} id={`socialMedia${display}`}>Social Media</div>
            </footer>

    );
};

export default Footer;