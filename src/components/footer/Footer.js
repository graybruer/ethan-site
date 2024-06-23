import './Footer.css'
import { useLocation } from 'react-router-dom';

const Footer = () => {

    // This should probably be useing useState or something but that was causing issues and this seems to work fine
    let size = 'Bottom';

    let location = useLocation();
    // console.log(location);

    if (location.pathname === '/contact') {
        size = 'Full';
    }
    else {
        size = 'Bottom';
    }

    return (

        <footer className={`footer${size}`}>
                <div className={`footerItem${size}`}>Phone Number</div>
                <div className={`footerItem${size}`}>Email</div>
                <div className={`footerItem${size}`}>Social Media</div>
        </footer>
    );
};

export default Footer;