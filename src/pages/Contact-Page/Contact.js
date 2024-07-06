import './Contact.css'
import './Contact-Breakpoints.css'
import { motion } from 'framer-motion';

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
                <div className='contactInfo' id='phoneNumber'>647 220-3430</div>
                <div className='contactInfo' id='email'>esnow272@gmail.com</div>
                <div className='contactInfo' id='socialMedia'>Social Media</div>
            </article>
        </motion.div>
    );
};

export default Contact;