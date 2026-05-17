import { motion } from 'framer-motion';
import SubGalleryPageCommercial from '../../../components/Sub_Gallery/Sub_Gallery_Page_Commercial';


const CommercialWorkSubGallery = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        //  also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="SubGallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>
            
            <SubGalleryPageCommercial
                Title = "Commercial Work"
                Date = ""
                Position = ""
            />

        </motion.div>
    );
};

export default CommercialWorkSubGallery;