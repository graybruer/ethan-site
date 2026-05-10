import { motion } from 'framer-motion';
import SubGalleryPage from '../../../components/Sub_Gallery/Sub_Gallery_Page';


const HtDASubGallery = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        //  also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="SubGallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>
            
            <SubGalleryPage
                Title = "How To Die Alone"
                Date = "2023"
                Position = "1st Assistant Art Director"
            />
        </motion.div>
    );
};

export default HtDASubGallery;