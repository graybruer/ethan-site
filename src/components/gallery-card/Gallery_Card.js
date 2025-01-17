import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const GALLERY_CARD = (props) => {

    return (

        <motion.div className="project"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>

                <Link to ={props.LinkTo}>
                <img src={props.Image} alt={props.Title}></img>
                <div className={props.TitleSide}>{props.Title}</div>
                </Link>
        </motion.div>

    );
};

export default GALLERY_CARD;