import './Gallery.css'
import './Gallery-Breakpoints.css'
import { motion } from 'framer-motion';
import GALLERY_CARD from '../../components/gallery-card/Gallery_Card';
import COMMERCIAL_GALLERY_CARD from '../../components/gallery-card/Commercial_Gallery_Card';
import imageImporter from "../../utils/imageImporter";
import commercialWorkReel from "../../assets/galleryImages/Commercial Work/Commercial Reel.webm";

const Gallery = () => {
    
    const images = imageImporter();

    // debugging:
    // console.log("is this thing on?");
    console.log(images); 


    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="Gallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>
            <article className='GalleryContent'>

                <COMMERCIAL_GALLERY_CARD
                    Title = "Commercial Work"
                    Date = ""
                    Position = ""
                    CardImage = {commercialWorkReel}
                />

                <GALLERY_CARD
                    Title = "Brilliant Minds - Season 2"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.BrilliantMindsSeason2BoilerRoom_Plan_resized}
                />

                <GALLERY_CARD
                    Title = "Sterling Point - Season 1"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.SterlingPointSeason1A032_onasBedroom_FloorPlanRCP_V01_072225_ISSUED_ES_resized}
                />
                
                <GALLERY_CARD
                    Title = "Relationship Goals"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.RelationshipGoalsRGLS_0139_100_Int_TVStudioPodium_FloorPlan_ES_Revised_20250317_resized}
                />

                <GALLERY_CARD
                    Title = "Kiss of Death"
                    Date = "2024"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.KissofDeath802_300_EXT_WOODSAndTRAILHEADBRIDGE_STUNTBRIDGEDETAILS_V1_ISSUED_ES_OCT15_resized}
                />

                <GALLERY_CARD
                    Title = "Ginny and Georgia"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.GinnyandGeorgiaCityCouncilMeeting_00_resized}
                />

                <GALLERY_CARD
                    Title = "How To Die Alone"
                    Date = "2023"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image02}
                />

                {/* Removed due to lack of content */}
                {/* <GALLERY_CARD
                    Title = "The Way Home"
                    Image = {project3}
                    TitleSide = "projectTitleRight"
                /> */}

                <GALLERY_CARD
                    Title = "Orphan Black Echoes - Season 1"
                    Date = "2022"
                    Position = "2st Assistant Art Director"
                    CardImage = {images.OrphanBlackEchoesSeason1Ethaniel_Snow_Portfolio_Image19_resized}
                />

                {/* Removed due to lack of content */}
                {/* <GALLERY_CARD
                    Title = "Ruby And The Well"
                    Image = {project1}
                    TitleSide = "projectTitleRight"
                /> */}

            </article>
        </motion.div>
    );
};

export default Gallery;