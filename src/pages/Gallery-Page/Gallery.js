import './Gallery.css'
import './Gallery-Breakpoints.css'
import { motion } from 'framer-motion';
import project7 from '../../assets/project-image-placeholder-1.jpg'
import project6 from '../../assets/project-image-placeholder-2.jpeg'
import project5 from '../../assets/project-image-placeholder-4.webp'
import project4 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-02.png'
import project3 from '../../assets/project-image-placeholder-3.webp'
import project2 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-19.png'
import project1 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-29.png'
import GALLERY_CARD from '../../components/gallery-card/Gallery_Card';


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

                <GALLERY_CARD
                    Title = "Kiss of Death"
                    Image = {project7}
                    TitleSide = "projectTitleRight"
                    LinkTo = "kiss-of-death"
                />

                <GALLERY_CARD
                    Title = "Ginny and Georgia"
                    Image = {project6}
                    TitleSide = "projectTitleLeft"
                    LinkTo = "ginny-and-georgia"
                />

                <GALLERY_CARD
                    Title = "Common Ground"
                    Image = {project5}
                    TitleSide = "projectTitleRight"
                    LinkTo = "common-ground"
                />

                <GALLERY_CARD
                    Title = "How To Die Alone"
                    Image = {project4}
                    TitleSide = "projectTitleLeft"
                    LinkTo = "how-to-die-alone"
                />

                <GALLERY_CARD
                    Title = "The Way Home"
                    Image = {project3}
                    TitleSide = "projectTitleRight"
                    LinkTo = "the-way-home"
                />

                <GALLERY_CARD
                    Title = "Orphan Black: Echoes"
                    Image = {project2}
                    TitleSide = "projectTitleLeft"
                    LinkTo = "orphan-black-echoes"
                />

                <GALLERY_CARD
                    Title = "Ruby And The Well"
                    Image = {project1}
                    TitleSide = "projectTitleRight"
                    LinkTo = "ruby-and-the-well"
                />

            </article>
        </motion.div>
    );
};

export default Gallery;