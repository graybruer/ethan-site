import './Footer.css'
import { useLocation } from 'react-router-dom';

const Footer = () => {

    // This should probably be useing useState or something but that was causing issues and this seems to work fine
    let display = 'Yes';

    let location = useLocation();
    console.log(location);

    if (location.pathname === '/contact' || location.pathname === '/' || location.pathname === 'ethan-site') {
        display = 'No';
    }
    else {
        display = 'Yes';
    }

    return (

            <footer className={`footer${display}`}>
                    <div className={`footerItem${display}`} id={`phoneNumber${display}`}>Phone Number</div>
                    <div className={`footerItem${display}`} id={`email${display}`}>Email</div>
                    <div className={`footerItem${display}`} id={`socialMedia${display}`}>Social Media</div>
            </footer>

    );
};

export default Footer;