import './Gallery.css'
import './Gallery-Breakpoints.css'
import { motion } from 'framer-motion';
import projectHeaderImage from '../../assets/project-image-placeholder-head.jpg'
import project1 from '../../assets/project-image-placeholder-1.jpg'
import project2 from '../../assets/project-image-placeholder-2.jpeg'
import project4 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-19.png'
import project5 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-29.png'
import project3 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-02.png'

const Gallery = () => {

    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s
        <motion.div className="Gallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>
            <article className='GalleryContent'>
                {/* <div className='projectHeader'>
                    <img src={projectHeaderImage} alt="Feature Project"></img>
                    <div className='projectHeaderText'>This is a short desciption of the content to be found on this</div>
                </div> */}
                <div className='project'>
                    <img src={project1} alt="Feature Project"></img>
                    <div className='projectTitleRight'>Common Ground</div>
                </div>
                <div className='project'>
                    <img src={project2} alt="Feature Project"></img>
                    <div className='projectTitleLeft'>The Way Home</div>
                </div>
                <div className='project'>
                    <img src={project3} alt="Feature Project"></img>
                    <div className='projectTitleRight'>How To Die Alone</div>
                </div>
                <div className='project'>
                    <img src={project4} alt="Feature Project"></img>
                    <div className='projectTitleLeft'>Orphan Black: Echoes</div>
                </div>
                <div className='project'>
                    <img src={project5} alt="Feature Project"></img>
                    <div className='projectTitleRight'>Ruby And The Well</div>
                </div>
            </article>
        </motion.div>
    );
};

export default Gallery;