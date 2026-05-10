import { motion } from 'framer-motion';
import imageImporter from '../../utils/imageImporter';
import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails, Counter, Zoom, Fullscreen, Inline } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import"yet-another-react-lightbox/plugins/thumbnails.css";
import "./Gallery_Subpage.css"
import "./Gallery_Subpage-Breakpoints.css"
import { NavLink } from 'react-router-dom';

const SubGalleryPage = (props) => {

    // console.log("is this thing even on?");

    const images = imageImporter();
    console.log(images);
    const projectTitleNameShort = props.Title.replace(/- /g, '').replace(/\s/g, '');
    // console.log(projectTitleNameShort);
    const projectImages = Object.keys(images).filter(startingWith => startingWith.includes(projectTitleNameShort));
    // console.log(projectImages);

    const altText = "Ethaniel Snow Portfolio Image for " + props.Title;
    // console.log(projectImages); 

    const numberOfSlides = (Object.keys(projectImages).length -1);
    const arrayOfSlides = [];
    for (let count = 0; count <= numberOfSlides; count++) {
        let x = projectImages[count];
        arrayOfSlides.push(
            {src: images[x], alt: {altText},}
        );
    }
    console.log(arrayOfSlides);

    return (
        //  reference: https://www.framer.com/motion/component/
        //  also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="SubGallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>
            
            <NavLink className='backToGallery' to="/gallery">
                &lt; Back to Gallery
            </NavLink>
            <section className='subGalleryContent'>
            <Lightbox
                slides={arrayOfSlides}
                plugins={[Inline, Thumbnails, Counter, Zoom, Fullscreen]}
                inline={{style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },}}
                thumbnails={{ showToggle: false }}
            />
            <div className='projectDetails'>
                <span>{props.Title}</span>
                <span>{props.Date}</span>
                <span>{props.Position}</span>
            </div>
            </section>

        </motion.div>
    );
};

export default SubGalleryPage;