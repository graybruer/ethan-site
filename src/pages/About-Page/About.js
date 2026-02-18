import './About.css'
import './About-Breakpoints.css'
import Ethan from '../../assets/Ethan-Placeholder.jpg';
import { motion } from 'framer-motion';

const About = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s
        <motion.div className='about'
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: "linear", duration: 0.25}}>
            <article className='aboutContent'>
                <img src={Ethan} alt="Ethaniel Snow" className='Portrait'></img>
                <article>
                <p>
                    Ethan Snow is an Assistant Art Director who has worked on numerous projects.
                    Outside of film, he works on the odd residential/commercial interior design & contracting project.
                </p>
                <p>
                    He currently lives in [insert city here] and is available to work [in area].
                    With experience a people and projects, strong technical drafting and 3D modelling skills, 
                    and a strong understanding of construction and building practices, 
                    Ethan has a generalist skill set and works well as part of a team or individually.
                </p>
                </article>
            </article>
        </motion.div>
    );
};

export default About;