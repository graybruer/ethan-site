import './CV_Card.css'
import './CV_Card-Breakpoints.css'
// import './CV-Breakpoints.css'
import { motion } from 'framer-motion';


const CV_CARD = (props) => {

    return (

        <motion.div className="cv-card"
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

export default CV_CARD;