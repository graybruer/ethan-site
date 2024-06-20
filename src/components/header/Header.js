import './Header.css'
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [page, setPage] = useState('Splash');

    return (
       <header className={`header${page}`}>
            <Link to='/' onClick={()=>setPage('Splash')}><img src={logo} alt="Ethaniel Snow Logo" id='navLogo'></img></Link>
            <nav>
                <ul>
                    <li className='navButton' id='navGallery'>Gallery</li>
                    <li className='navButton' id='navAbout'><Link to='/about' onClick={()=>setPage('Compact')}>About</Link></li>
                    <li className='navButton' id='navCV'>CV</li>
                    <li className='navButton' id='navContact'>Contact</li>
                </ul>
            </nav>
       </header>
    );
};

export default Header;