import './About.css'
import './About-Breakpoints.css'
import Ethan from '../../assets/MiscImages/EthanHeadshot_smaller.jpeg';
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
                    <strong>Ethaniel Snow</strong> is a Toronto-based <strong>Set Designer</strong> working across film, television, and commercial production. 
                    A graduate of Sheridan College’s Honours Bachelor of Interior Design program, he brings a strong foundation in spatial planning, drafting, and construction knowledge to the art department. 
                    Additional studies in the fields of fine art, creativity & problem solving, as well as group dynamics blend together to create a diverse skill set.
                </p>
                <p>
                    With experience supporting productions from prep through shoot, Snow works closely with production designers and art directors to develop detailed set drawings, generate script breakdowns, coordinate technical documentation, oversee location measures, and assist with build logistics. 
                    His approach combines strong research, material awareness, and practical construction knowledge to help translate design concepts into functional, camera-ready environments.
                </p>
                </article>
            </article>
        </motion.div>
    );
};

export default About;