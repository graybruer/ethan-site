import './Gallery.css'
import { motion } from 'framer-motion';
import projectHeaderImage from '../../assets/project-image-placeholder-head.jpg'
import project1 from '../../assets/project-image-placeholder-1.jpg'
import project2 from '../../assets/project-image-placeholder-2.jpeg'
import project3 from '../../assets/project-image-placeholder-3.webp'
import project4 from '../../assets/project-image-placeholder-4.webp'
import project5 from '../../assets/project-image-placeholder-5.jpg'
import project6 from '../../assets/project-image-placeholder-6.jpg'

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
                <div className='projectHeader'>
                    <img src={projectHeaderImage} alt="Feature Project"></img>
                </div>
                <div className='project'>
                    <img src={project1} alt="Feature Project"></img>
                </div>
                <div className='project'>
                    <img src={project2} alt="Feature Project"></img>
                </div>
                <div className='project'>
                    <img src={project3} alt="Feature Project"></img>
                </div>
                <div className='project'>
                    <img src={project4} alt="Feature Project"></img>
                </div>
                <div className='project'>
                    <img src={project5} alt="Feature Project"></img>
                </div>
                <div className='project'>
                    <img src={project6} alt="Feature Project"></img>
                </div>
            </article>
        </motion.div>
    );
};

export default Gallery;