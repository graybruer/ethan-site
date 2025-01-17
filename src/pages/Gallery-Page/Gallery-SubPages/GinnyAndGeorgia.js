
import { motion } from 'framer-motion';


const GinnyAndGeorgia = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="Gallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>
            <article className='GalleryContent'>

                <p>test pls work</p>

            </article>
        </motion.div>
    );
};

export default GinnyAndGeorgia;