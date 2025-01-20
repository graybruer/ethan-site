import { motion } from 'framer-motion';
import './GallerySubpage.css';

import placeholder from '../../../assets/placeholder.png';
import placeholder_video2 from '../../../assets/Project Pages/flower.webm'

const KissOfDeath = () => {

    return (

        <motion.div className="projectPage"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>
            <article className='projectDetails'>

                <img className='projectTopImage' src={placeholder} alt='blah'></img>
                <div className='theBigThreeDetails'>
                    <p>Kiss of Death</p>
                    <p>2024</p>
                    <p>1st Assistant Art Director</p>
                    {/* <p>Kiss of Death</p> */}
                </div>
                <video  src={placeholder_video2}
                        type="video/webm"
                        controls='true'
                        loop='true'>
                </video>
                <div className='detailsText'>This is what I worked on for this job blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  </div>
                <img className='projectExtraImages' src={placeholder} alt='blah'></img>
                <img className='projectExtraImages' src={placeholder} alt='blah'></img>
                <img className='projectExtraImages' src={placeholder} alt='blah'></img>

            </article>
        </motion.div>
    );
};

export default KissOfDeath;