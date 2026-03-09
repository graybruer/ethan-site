import { motion } from 'framer-motion';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

import './GallerySubpage.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const GallerySubpage = (props) => {

    return (

        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s
        <motion.div
        className="projectPage"
        initial={{y: 300, opacity: 0}}
        animate={{y: 0, opacity: 1,}}
        exit={{y: 300, opacity: 0}}
        transition={{ease: 'easeInOut', duration: 0.5}}>
            <a href='#/gallery'><div className='backButtonSubGallery'>{'<'} Back to Gallery</div></a>
            <article className='projectDetails'>
                <video  src={props.Video}
                        type="video/webm"
                        controls='true'
                        loop='true'>
                </video>
                <div className='mainDetails'>
                    <p>{props.Title}</p>
                    <p>{props.Date}</p>
                    <p>{props.Role}</p>
                    <div className='detailsText'>{props.Details}</div>
                </div>
                <div className='projectGallery'>
                <LightGallery speed={500} plugins={[lgZoom]}>
                    <a href={props.Image1}>
                        <img className='projectImage' src={props.Image1} alt='blah blah blah'></img>
                    </a>
                    <a href={props.Image1}>
                        <img className='projectImage' src={props.Image1} alt='blah blah blah'></img>
                    </a>
                    <a href={props.Image1}>
                        <img className='projectImage' src={props.Image1} alt='blah blah blah'></img>
                    </a>
                    <a href={props.Image1}>
                        <img className='projectImage' src={props.Image1} alt='blah blah blah'></img>
                    </a>
                </LightGallery>
                </div>
            </article>
        </motion.div>
    );
};

export default GallerySubpage;