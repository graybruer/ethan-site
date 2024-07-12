import './Contact.css'
import './Contact-Breakpoints.css'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
// import DGC from '../../assets/directors-guild-of-canada-dgc-vector-logo.png'
// import IMDB from '../../assets/4373222_imdb_logo_logos_icon.png'

const Contact = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s
        <motion.div className='contact'
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: "linear", duration: 0.5}}>
            <article className='contactContent'>
                <div></div>
                <div className='contactInfo' id='phoneNumber'>647 220-3430</div>
                <div className='contactInfo' id='email'>esnow272@gmail.com</div>
                <div className='contactInfo' id='DGCLink'>
                    <NavLink to={'https://www.dgc.ca/en/profile-public-view/VTJGc2RHVmtYMStaUXcvdE0wRnRPSVR1VDkySjBUcjVvY1ZzcDYzcHVDcz0%3D'}>
                        Directors Guild of Canada Profile <sup>🔗</sup>
                    </NavLink>
                </div>
                <div className='contactInfo' id='IMDBLink'>
                    <NavLink to={'https://www.imdb.com/name/nm13072965/'}>
                        IMDB Profile <sup>🔗</sup>
                    </NavLink>
                </div>
                <div></div>
            </article>
        </motion.div>
    );
};

export default Contact;