import { motion } from 'framer-motion';
import './GallerySubpage.css'

const KissOfDeath = () => {

    return (

        <motion.div className="projectPage"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>
            <article className='projectDetails'>

                <p>test pls work</p>
                filmworkText
                <div>text</div>

            </article>
        </motion.div>
    );
};

export default KissOfDeath;