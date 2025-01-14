import './Gallery_Card.css'
import './Gallery_Card-Breakpoints.css'
// import './CV-Breakpoints.css'
import { motion } from 'framer-motion';


const CV_CARD = (props) => {

    return (

        <motion.div className="gallery-card"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>

                <h1>{props.Title}</h1>
                <h2>{props.Date}</h2>
                <h2>{props.Company}</h2>
                <h3>{props.Position}</h3>

        </motion.div>
    );
};

export default GALLERY_CARD;