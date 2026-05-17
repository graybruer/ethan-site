import { motion } from 'framer-motion';
import imageImporter from '../../utils/imageImporter';
import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails, Counter, Zoom, Fullscreen, Inline, Video, } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import"yet-another-react-lightbox/plugins/thumbnails.css";
import "./Gallery_Subpage.css"
import "./Gallery_Subpage-Breakpoints.css"
import { NavLink } from 'react-router-dom';

import commercialWorkReel from "../../assets/galleryImages/Commercial Work/Commercial Reel.webm";
import commercial_work_video_poster from '../../assets/MiscImages/commercial_work_video_poster.png'


const SubGalleryPageCommercial = (props) => {

    // console.log("is this thing even on?");
    const images = imageImporter();
    const projectTitleNameShort = props.Title.replace(/- /g, '').replace(/\s/g, '');
    // console.log(projectTitleNameShort);
    const projectImages = Object.keys(images).filter(startingWith => startingWith.includes(projectTitleNameShort));
    // console.log(projectImages);

    const altText = "Ethaniel Snow Portfolio Image for " + props.Title;

    // const numberOfSlides = (Object.keys(projectImages).length - 1);

    const arrayOfSlides = [{
        type: "video", 
        width: 1280, 
        height: 720, 
        poster: `${commercial_work_video_poster}`, 
        sources: [{
            src: commercialWorkReel, 
            type: "video/mp4",
        },],
    },];

    const numberOfSlides = (Object.keys(projectImages).length -1);

    for (let count = 0; count <= numberOfSlides; count++) {
        let x = projectImages[count];
        arrayOfSlides.push(
            {src: images[x], alt: {altText},}
        );
    }
    console.log(arrayOfSlides);

    // for (let count = 0; count <= numberOfSlides; count++) {
    //     let x = projectImages[`Image${count+1}`];
    //     slides.push(
    //         {src: x, alt: {altText},}
    //     );
    // }

    // console.log(slides);

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
                plugins={[Inline, Thumbnails, Counter, Zoom, Fullscreen, Video]}
                inline={{style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },}}
                thumbnails={{ showToggle: false }}
                video={{autoPlay:true, muted:true, playsInline:true, preload:"auto"}}
            />
            <div className='projectDetails'>
                <span>{props.Title}</span>
            </div>
            </section>

        </motion.div>
    );
};

export default SubGalleryPageCommercial;