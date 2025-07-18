import { motion } from 'framer-motion';
import './GallerySubpage.css';

import placeholder from '../../../assets/placeholder.png';
import placeholder_video2 from '../../../assets/Project Pages/flower.webm'

const KissOfDeath = () => {

    return (

        <motion.div className="projectPage"
                    initial={{y: 300, opacity: 0}}
                    animate={{y: 0, opacity: 1,}}
                    exit={{y: 300, opacity: 0}}
                    transition={{ease: 'easeInOut', duration: 0.5}}>
            <article className='projectDetails'>

                <img className='projectTopImage' src={placeholder} alt='blah blah blah'></img>
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
                <div className='detailsText'>This is what I worked on for this job blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah enter content here  </div>
                <img className='projectExtraImages' src={placeholder} alt='blah blah blah'></img>
                <img className='projectExtraImages' src={placeholder} alt='blah blah blah'></img>
                <img className='projectExtraImages' src={placeholder} alt='blah blah blah'></img>

            </article>
        </motion.div>
    );
};

export default KissOfDeath;