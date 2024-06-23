import './About.css'
import Ethan from '../../assets/Ethan-Placeholder.jpg';
import { motion } from 'framer-motion';

const About = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s
        <motion.div className='about'
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: "linear", duration: 0.5}}>
            <article className='aboutContent'>
                <img src={Ethan} alt="Ethaniel Snow" className='Portrait'></img>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     <br/>
                     Duis aute irure dolor in reprehenderit in voluptate
                     velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </article>
        </motion.div>
    );
};

export default About;