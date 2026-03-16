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
                        <img className='projectImage' src={props.Image1} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image2}>
                        <img className='projectImage' src={props.Image2} alt='project gallery item' data-iframe="true"></img>
                    </a>
                    <a href={props.Image3}>
                        <img className='projectImage' src={props.Image3} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image4}>
                        <img className='projectImage' src={props.Image4} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image5}>
                        <img className='projectImage' src={props.Image5} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image6}>
                        <img className='projectImage' src={props.Image6} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image7}>
                        <img className='projectImage' src={props.Image7} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image8}>
                        <img className='projectImage' src={props.Image8} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image9}>
                        <img className='projectImage' src={props.Image9} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image10}>
                        <img className='projectImage' src={props.Image10} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image11}>
                        <img className='projectImage' src={props.Image11} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image12}>
                        <img className='projectImage' src={props.Image12} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image13}>
                        <img className='projectImage' src={props.Image13} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image14}>
                        <img className='projectImage' src={props.Image14} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image15}>
                        <img className='projectImage' src={props.Image15} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image16}>
                        <img className='projectImage' src={props.Image16} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image17}>
                        <img className='projectImage' src={props.Image17} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image18}>
                        <img className='projectImage' src={props.Image18} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image19}>
                        <img className='projectImage' src={props.Image19} alt='project gallery item'></img>
                    </a>
                    <a href={props.Image20}>
                        <img className='projectImage' src={props.Image20} alt='project gallery item'></img>
                    </a>
                </LightGallery>
                </div>
            </article>
        </motion.div>
    );
};

export default GallerySubpage;