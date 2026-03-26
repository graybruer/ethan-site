import './Gallery.css'
import './Gallery-Breakpoints.css'
import { motion } from 'framer-motion';
import project7 from '../../assets/MiscImages/placeholder.png'
import project4 from '../../assets/Ethan Snow Portfolio Images/Ethaniel_Snow_Portfolio_Image-02.png'
import GALLERY_CARD from '../../components/gallery-card/Gallery_Card';
import placeholder from '../../assets/MiscImages/placeholder.png'

import imageImporter from "../../utils/imageImporter";

const Gallery = () => {
    
    const images = imageImporter();

    // debugging:
    console.log(images);
    // console.log("is this thing on?");


    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="Gallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>
            <article className='GalleryContent'>

                <GALLERY_CARD
                    Title = "Brilliant Minds - Season 2"
                    CardImage = {images.BrilliantMindsS2BoilerRoom_Plan}
                    Image1 = {images.BrilliantMindsS2BoilerRoom_Plan}
                    Image2 = {images.BrilliantMindsS2HyperbaricChamber_01}
                    Image3 = {images.BrilliantMindsS2HyperbaricChamber_PipeElevation}
                    Image4 = {images.BrilliantMindsS2HyperbaricChamber_03}
                    Image5 = {images.BrilliantMindsS2HyperbaricChamber_Plan}
                    Image6 = {images.BrilliantMindsS2HyperbaricChamber_01}
                    Image7 = {images.BrilliantMindsS2HyperbaricChamber_SectionsAndElevations}
                    Image8 = {images.BrilliantMindsS2BoilerRoom_03}
                    Image9 = {images.BrilliantMindsS2BoilerRoom_01}
                />

                <GALLERY_CARD
                    Title = "Sterling Point - Season 1"
                    CardImage = {project7}
                    Image1 = {images.Placeholder}
                    Image2 = {images.Placeholder}
                    Image3 = {images.Placeholder}
                    Image4 = {images.Placeholder}
                    Image5 = {images.Placeholder}
                    Image6 = {images.Placeholder}
                    Image7 = {images.Placeholder}
                    Image8 = {images.Placeholder}
                    Image9 = {images.Placeholder}
                    Image10 = {images.Placeholder}
                    Image11 = {images.Placeholder}
                />
                
                <GALLERY_CARD
                    Title = "Relationship Goals"
                    CardImage = {images.RelationshipGoalsRGLS_0139_1TVStudioPodium_FloorPlan_ES_Revised_20250317webp}
                    Image1 = {images.RelationshipGoalsRGLS_0139_1TVStudioPodium_FloorPlan_ES_Revised_20250317webp}
                    Image2 = {images.RelationshipGoalsRGLS_0139_3TVStudioPodium_WallCSections_ES_Issued_20250324webp}
                    Image3 = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_CeilingVolumeDetails_ES_Issued_20250306webp}
                    Image4 = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_DeskPlatformDetails_ES_Issued_20250306webp}
                    Image5 = {images.RelationshipGoalsRGLS_CentreOffside}
                    Image6 = {images.RelationshipGoalsRGLS_CentreWall}
                    Image7 = {images.RelationshipGoalsRGLS_LookingLeft}
                    Image8 = {images.RelationshipGoalsRGLS_LookingRight}
                    Image9 = {images.RelationshipGoalsRGLS_Overhead}
                    Image10 = {images.RelationshipGoalsSet_01}
                    Image11 = {images.RelationshipGoalsSet_02}
                />

                <GALLERY_CARD
                    Title = "Kiss of Death"
                    CardImage = {images.KissofDeath802_300_EXTwebp}
                    Image1 = {images.KissofDeath802_300_EXTwebp}
                    Image2 = {images.KissofDeath802_301_EXTAndTRAILHEADBRIDGE_BRIDGESCAFFOLDDETAILS_V1_ISSUED_ES_OCT15webp}
                    Image3 = {images.KissofDeathBridgePerspective_OCT112024}
                    Image4 = {images.KissofDeathPerspectiveView_OCT112024}
                    Image5 = {images.KissofDeathStuntBridge}
                    Image6 = {images.KissofDeathStuntBridge_Broken}
                    Image7 = {images.KissofDeathStuntBridge_Wide}
                />

                <GALLERY_CARD
                    Title = "Ginny and Georgia"
                    CardImage = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00}
                    Image1 = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00}
                    Image2 = {images.GinnyAndGeorgiaS3CityCouncilMeeting_01}
                    Image3 = {images.GinnyAndGeorgiaS3CityCouncilMeeting_03}
                    Image4 = {images.GinnyAndGeorgiaS3PoetryClass_01}
                    Image5 = {images.GinnyAndGeorgiaS3PoetryClass_03}
                    Image6 = {images.GinnyAndGeorgiaS3PrisonFB_00}
                    Image7 = {images.GinnyAndGeorgiaS3PrisonFB_02}
                    Image8 = {images.GinnyAndGeorgiaS3PrisonFB_05}
                    Image9 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_00}
                    Image10 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_03}
                    Image11 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_DOORDETAILS}
                    Image12 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_FINISHESPLAN}
                    Image13 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_MAINSTHALLELEVATIONS}
                    Image14 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_02}
                />

                <GALLERY_CARD
                    Title = "How To Die Alone"
                    CardImage = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image02}
                    Image1 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image03}
                    Image2 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image04}
                    Image3 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image05}
                    Image4 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image06}
                    Image5 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image07}
                    Image6 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image08}
                    Image7 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image09}
                    Image8 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image10}
                    Image9 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image11}
                    Image10 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image12}
                    Image11 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image13}
                    Image12 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image14}
                    Image13 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image15}
                    Image14 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image16}
                    Image15 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image17}
                />

                {/* Removed due to lack of content */}
                {/* <GALLERY_CARD
                    Title = "The Way Home"
                    Image = {project3}
                    TitleSide = "projectTitleRight"
                /> */}

                <GALLERY_CARD
                    Title = "Orphan Black Echoes - S1"
                    CardImage = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image19}
                    Image1 = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image19}
                    Image2 = {images.OrphanBlackEchoesS1BostonApartment_2}
                    Image3 = {images.OrphanBlackEchoesS1JulesCondo}
                    Image4 = {images.OrphanBlackEchoesS1JulesCondo_2}
                    Image5 = {images.OrphanBlackEchoesS1PaperCave_4}
                    Image6 = {images.OrphanBlackEchoesS1Playground}
                    Image7 = {images.OrphanBlackEchoesS1QuonsetHut_2}
                    Image8 = {images.OrphanBlackEchoesS1Tina_sHouse}
                    Image9 = {images.OrphanBlackEchoesS1UndergroundEntrance}
                    Image10 = {placeholder}
                    Image11 = {placeholder}
                    Image12 = {placeholder}
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