import './Gallery.css'
import './Gallery-Breakpoints.css'
import { motion } from 'framer-motion';
import GALLERY_CARD from '../../components/gallery-card/Gallery_Card';
import placeholder from '../../assets/MiscImages/placeholder.png'

import imageImporter from "../../utils/imageImporter";

const Gallery = () => {
    
    const images = imageImporter();

    // debugging:
    // console.log(images);
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
                    Title = "Commercial Work"
                    Date = ""
                    Position = ""
                    CardImage = {placeholder}
                    Image1 = {placeholder}
                    Image1b = {placeholder}
                    Image1c = {placeholder}
                    Image1d = {placeholder}
                />

                <GALLERY_CARD
                    Title = "Brilliant Minds - Season 2"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.BrilliantMindsS2BoilerRoom_Plan_resized_resized}
                    Image1 = {images.BrilliantMindsS2BoilerRoom_Plan}
                    Image1b = {images.BrilliantMindsS2BoilerRoom_Plan_resized}
                    Image1c = {images.BrilliantMindsS2BoilerRoom_Plan_resized_resized}
                    Image1d = {images.BrilliantMindsS2BoilerRoom_Plan_resized_resized_resized}
                    Image2 = {images.BrilliantMindsS2HyperbaricChamber_01}
                    Image2b = {images.BrilliantMindsS2HyperbaricChamber_01_resized}
                    Image2c = {images.BrilliantMindsS2HyperbaricChamber_01_resized_resized}
                    Image2d = {images.BrilliantMindsS2HyperbaricChamber_01_resized_resized_resized}
                    Image3 = {images.BrilliantMindsS2HyperbaricChamber_PipeElevation}
                    Image3b = {images.BrilliantMindsS2HyperbaricChamber_PipeElevation_resized}
                    Image3c = {images.BrilliantMindsS2HyperbaricChamber_PipeElevation_resized_resized}
                    Image3d = {images.BrilliantMindsS2HyperbaricChamber_PipeElevation_resized_resized_resized}
                    Image4 = {images.BrilliantMindsS2HyperbaricChamber_03}
                    Image4b = {images.BrilliantMindsS2HyperbaricChamber_03_resized}
                    Image4c = {images.BrilliantMindsS2HyperbaricChamber_03_resized_resized}
                    Image4d = {images.BrilliantMindsS2HyperbaricChamber_03_resized_resized_resized}
                    Image5 = {images.BrilliantMindsS2HyperbaricChamber_Plan}
                    Image5b = {images.BrilliantMindsS2HyperbaricChamber_Plan_resized}
                    Image5c = {images.BrilliantMindsS2HyperbaricChamber_Plan_resized_resized}
                    Image5d = {images.BrilliantMindsS2HyperbaricChamber_Plan_resized_resized_resized}
                    Image6 = {images.BrilliantMindsS2HyperbaricChamber_07}
                    Image6b = {images.BrilliantMindsS2HyperbaricChamber_07_resized}
                    Image6c = {images.BrilliantMindsS2HyperbaricChamber_07_resized_resized}
                    Image6d = {images.BrilliantMindsS2HyperbaricChamber_07_resized_resized_resized}
                    Image7 = {images.BrilliantMindsS2HyperbaricChamber_SectionsAndElevations}
                    Image7b = {images.BrilliantMindsS2HyperbaricChamber_SectionsAndElevations_resized}
                    Image7c = {images.BrilliantMindsS2HyperbaricChamber_SectionsAndElevations_resized_resized}
                    Image7d = {images.BrilliantMindsS2HyperbaricChamber_SectionsAndElevations_resized_resized_resized}
                    Image8 = {images.BrilliantMindsS2BoilerRoom_03}
                    Image8b = {images.BrilliantMindsS2BoilerRoom_03_resized}
                    Image8c = {images.BrilliantMindsS2BoilerRoom_03_resized_resized}
                    Image8d = {images.BrilliantMindsS2BoilerRoom_03_resized_resized_resized}
                    Image9 = {images.BrilliantMindsS2BoilerRoom_01}
                    Image9b = {images.BrilliantMindsS2BoilerRoom_01_resized}
                    Image9c = {images.BrilliantMindsS2BoilerRoom_01_resized_resized}
                    Image9d = {images.BrilliantMindsS2BoilerRoom_01_resized_resized_resized}
                />

                <GALLERY_CARD
                    Title = "Sterling Point - Season 1"
                    CardImage = {placeholder}
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    Image1 = {placeholder}
                    Image1b = {placeholder}
                    Image1c = {placeholder}
                    Image1d = {placeholder}
                />
                
                <GALLERY_CARD
                    Title = "Relationship Goals"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.RelationshipGoalsRGLS_0139_100_Int_TVStudioPodium_FloorPlan_ES_Revised_20250317_resized_resized}
                    Image1 = {images.RelationshipGoalsRGLS_0139_1TVStudioPodium_FloorPlan_ES_Revised_20250317webp}
                    Image1b = {images.RelationshipGoalsRGLS_0139_1TVStudioPodium_FloorPlan_ES_Revised_20250317webp_resized}
                    Image1c = {images.RelationshipGoalsRGLS_0139_1TVStudioPodium_FloorPlan_ES_Revised_20250317webp_resized_resized}
                    Image1d = {images.RelationshipGoalsRGLS_0139_1TVStudioPodium_FloorPlan_ES_Revised_20250317webp_resized_resized_resized}
                    Image2 = {images.RelationshipGoalsRGLS_0139_3TVStudioPodium_WallCSections_ES_Issued_20250324webp}
                    Image2b = {images.RelationshipGoalsRGLS_0139_3TVStudioPodium_WallCSections_ES_Issued_20250324webp_resized}
                    Image2c = {images.RelationshipGoalsRGLS_0139_3TVStudioPodium_WallCSections_ES_Issued_20250324webp_resized_resized}
                    Image2d = {images.RelationshipGoalsRGLS_0139_3TVStudioPodium_WallCSections_ES_Issued_20250324webp_resized_resized_resized}
                    Image3 = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_CeilingVolumeDetails_ES_Issued_20250306webp}
                    Image3b = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_CeilingVolumeDetails_ES_Issued_20250306webp_resized}
                    Image3c = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_CeilingVolumeDetails_ES_Issued_20250306webp_resized_resized}
                    Image3d = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_CeilingVolumeDetails_ES_Issued_20250306webp_resized_resized_resized}
                    Image4 = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_DeskPlatformDetails_ES_Issued_20250306webp}
                    Image4b = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_DeskPlatformDetails_ES_Issued_20250306webp_resized}
                    Image4c = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_DeskPlatformDetails_ES_Issued_20250306webp_resized_resized}
                    Image4d = {images.RelationshipGoalsRGLS_0139_4TVStudioPodium_DeskPlatformDetails_ES_Issued_20250306webp_resized_resized_resized}
                    Image5 = {images.RelationshipGoalsRGLS_CentreOffside}
                    Image5b = {images.RelationshipGoalsRGLS_CentreOffside_resized}
                    Image5c = {images.RelationshipGoalsRGLS_CentreOffside_resized_resized}
                    Image5d = {images.RelationshipGoalsRGLS_CentreOffside_resized_resized_resized}
                    Image6 = {images.RelationshipGoalsRGLS_CentreWall}
                    Image6b = {images.RelationshipGoalsRGLS_CentreWall_resized}
                    Image6c = {images.RelationshipGoalsRGLS_CentreWall_resized_resized}
                    Image6d = {images.RelationshipGoalsRGLS_CentreWall_resized_resized_resized}
                    Image7 = {images.RelationshipGoalsRGLS_LookingLeft}
                    Image7b = {images.RelationshipGoalsRGLS_LookingLeft_resized}
                    Image7c = {images.RelationshipGoalsRGLS_LookingLeft_resized_resized}
                    Image7d = {images.RelationshipGoalsRGLS_LookingLeft_resized_resized_resized}
                    Image8 = {images.RelationshipGoalsRGLS_LookingRight}
                    Image8b = {images.RelationshipGoalsRGLS_LookingRight_resized}
                    Image8c = {images.RelationshipGoalsRGLS_LookingRight_resized_resized}
                    Image8d = {images.RelationshipGoalsRGLS_LookingRight_resized_resized_resized}
                    Image9 = {images.RelationshipGoalsRGLS_Overhead}
                    Image9b = {images.RelationshipGoalsRGLS_Overhead_resized}
                    Image9c = {images.RelationshipGoalsRGLS_Overhead_resized_resized}
                    Image9d = {images.RelationshipGoalsRGLS_Overhead_resized_resized_resized}
                    Image10 = {images.RelationshipGoalsSet_01}
                    Image10b = {images.RelationshipGoalsSet_01_resized}
                    Image10c = {images.RelationshipGoalsSet_01_resized_resized}
                    Image10d = {images.RelationshipGoalsSet_01_resized_resized_resized}
                    Image11 = {images.RelationshipGoalsSet_02}
                    Image11b = {images.RelationshipGoalsSet_02_resized}
                    Image11c = {images.RelationshipGoalsSet_02_resized_resized}
                    Image11d = {images.RelationshipGoalsSet_02_resized_resized_resized}
                />

                <GALLERY_CARD
                    Title = "Kiss of Death"
                    Date = "2024"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.KissofDeath802_300_EXT_WOODSAndTRAILHEADBRIDGE_STUNTBRIDGEDETAILS_V1_ISSUED_ES_OCT15_resized_resized}
                    Image1 = {images.KissofDeath802_300_EXTwebp}
                    Image1b = {images.KissofDeath802_300_EXTwebp_resized}
                    Image1c = {images.KissofDeath802_300_EXTwebp_resized_resized}
                    Image1d = {images.KissofDeath802_300_EXTwebp_resized_resized_resized}
                    Image2 = {images.KissofDeath802_301_EXTAndTRAILHEADBRIDGE_BRIDGESCAFFOLDDETAILS_V1_ISSUED_ES_OCT15webp}
                    Image2b = {images.KissofDeath802_301_EXTAndTRAILHEADBRIDGE_BRIDGESCAFFOLDDETAILS_V1_ISSUED_ES_OCT15webp_resized}
                    Image2c = {images.KissofDeath802_301_EXTAndTRAILHEADBRIDGE_BRIDGESCAFFOLDDETAILS_V1_ISSUED_ES_OCT15webp_resized_resized}
                    Image2d = {images.KissofDeath802_301_EXTAndTRAILHEADBRIDGE_BRIDGESCAFFOLDDETAILS_V1_ISSUED_ES_OCT15webp_resized_resized_resized}
                    Image3 = {images.KissofDeathBridgePerspective_OCT112024}
                    Image3b = {images.KissofDeathBridgePerspective_OCT112024_resized}
                    Image3c = {images.KissofDeathBridgePerspective_OCT112024_resized_resized}
                    Image3d = {images.KissofDeathBridgePerspective_OCT112024_resized_resized_resized}
                    Image4 = {images.KissofDeathPerspectiveView_OCT112024}
                    Image4b = {images.KissofDeathPerspectiveView_OCT112024_resized}
                    Image4c = {images.KissofDeathPerspectiveView_OCT112024_resized_resized}
                    Image4d = {images.KissofDeathPerspectiveView_OCT112024_resized_resized_resized}
                    Image5 = {images.KissofDeathStuntBridge}
                    Image5b = {images.KissofDeathStuntBridge_resized}
                    Image5c = {images.KissofDeathStuntBridge_resized_resized}
                    Image5d = {images.KissofDeathStuntBridge_resized_resized_resized}
                    Image6 = {images.KissofDeathStuntBridge_Broken}
                    Image6b = {images.KissofDeathStuntBridge_Broken_resized}
                    Image6c = {images.KissofDeathStuntBridge_Broken_resized_resized}
                    Image6d = {images.KissofDeathStuntBridge_Broken_resized_resized_resized}
                    Image7 = {images.KissofDeathStuntBridge_Wide}
                    Image7b = {images.KissofDeathStuntBridge_Wide_resized}
                    Image7c = {images.KissofDeathStuntBridge_Wide_resized_resized}
                    Image7d = {images.KissofDeathStuntBridge_Wide_resized_resized_resized}
                />

                <GALLERY_CARD
                    Title = "Ginny and Georgia"
                    Date = "2025"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00_resized_resized}
                    Image1 = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00}
                    Image1b = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00_resized}
                    Image1c = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00_resized_resized}
                    Image1d = {images.GinnyAndGeorgiaS3CityCouncilMeeting_00_resized_resized_resized}
                    Image2 = {images.GinnyAndGeorgiaS3CityCouncilMeeting_01}
                    Image2b = {images.GinnyAndGeorgiaS3CityCouncilMeeting_01_resized}
                    Image2c = {images.GinnyAndGeorgiaS3CityCouncilMeeting_01_resized_resized}
                    Image2d = {images.GinnyAndGeorgiaS3CityCouncilMeeting_01_resized_resized_resized}
                    Image3 = {images.GinnyAndGeorgiaS3CityCouncilMeeting_03}
                    Image3b = {images.GinnyAndGeorgiaS3CityCouncilMeeting_03_resized}
                    Image3c = {images.GinnyAndGeorgiaS3CityCouncilMeeting_03_resized_resized}
                    Image3d = {images.GinnyAndGeorgiaS3CityCouncilMeeting_03_resized_resized_resized}
                    Image4 = {images.GinnyAndGeorgiaS3PoetryClass_01}
                    Image4b = {images.GinnyAndGeorgiaS3PoetryClass_01_resized}
                    Image4c = {images.GinnyAndGeorgiaS3PoetryClass_01_resized_resized}
                    Image4d = {images.GinnyAndGeorgiaS3PoetryClass_01_resized_resized_resized}
                    Image5 = {images.GinnyAndGeorgiaS3PoetryClass_03}
                    Image5b = {images.GinnyAndGeorgiaS3PoetryClass_03_resized}
                    Image5c = {images.GinnyAndGeorgiaS3PoetryClass_03_resized_resized}
                    Image5d = {images.GinnyAndGeorgiaS3PoetryClass_03_resized_resized_resized}
                    Image6 = {images.GinnyAndGeorgiaS3PrisonFB_00}
                    Image6b = {images.GinnyAndGeorgiaS3PrisonFB_00_resized}
                    Image6c = {images.GinnyAndGeorgiaS3PrisonFB_00_resized_resized}
                    Image6d = {images.GinnyAndGeorgiaS3PrisonFB_00_resized_resized_resized}
                    Image7 = {images.GinnyAndGeorgiaS3PrisonFB_02}
                    Image7b = {images.GinnyAndGeorgiaS3PrisonFB_02_resized}
                    Image7c = {images.GinnyAndGeorgiaS3PrisonFB_02_resized_resized}
                    Image7d = {images.GinnyAndGeorgiaS3PrisonFB_02_resized_resized_resized}
                    Image8 = {images.GinnyAndGeorgiaS3PrisonFB_05}
                    Image8b = {images.GinnyAndGeorgiaS3PrisonFB_05_resized}
                    Image8c = {images.GinnyAndGeorgiaS3PrisonFB_05_resized_resized}
                    Image8d = {images.GinnyAndGeorgiaS3PrisonFB_05_resized_resized_resized}
                    Image9 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_00}
                    Image9b = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_00_resized}
                    Image9c = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_00_resized_resized}
                    Image9d = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_00_resized_resized_resized}
                    Image10 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_03}
                    Image10b = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_03_resized}
                    Image10c = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_03_resized_resized}
                    Image10d = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOLMUSICAL_03_resized_resized_resized}
                    Image11 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_DOORDETAILS}
                    Image11b = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_DOORDETAILS_resized}
                    Image11c = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_DOORDETAILS_resized_resized}
                    Image11d = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_DOORDETAILS_resized_resized_resized}
                    Image12 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_FINISHESPLAN}
                    Image12b = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_FINISHESPLAN_resized}
                    Image12c = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_FINISHESPLAN_resized_resized}
                    Image12d = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_FINISHESPLAN_resized_resized_resized}
                    Image13 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_MAINSTHALLELEVATIONS}
                    Image13b = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_MAINSTHALLELEVATIONS_resized}
                    Image13c = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_MAINSTHALLELEVATIONS_resized_resized}
                    Image13d = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_00_MAINSTHALLELEVATIONS_resized_resized_resized}
                    Image14 = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_02}
                    Image14b = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_02_resized}
                    Image14c = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_02_resized_resized}
                    Image14d = {images.GinnyAndGeorgiaS3WELLSBURYHIGHSCHOOL_02_resized_resized_resized}
                />

                <GALLERY_CARD
                    Title = "How To Die Alone"
                    Date = "2023"
                    Position = "1st Assistant Art Director"
                    CardImage = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image02_resized_resized}
                    Image1 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image03_resized_resized}
                    Image1b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image03_resized_resized_resized_resized}
                    Image1c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image03_resized_resized}
                    Image1d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image03_resized_resized_resized}
                    Image2 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image04}
                    Image2b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image04_resized}
                    Image2c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image04_resized_resized}
                    Image2d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image04_resized_resized_resized}
                    Image3 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image05}
                    Image3b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image05_resized}
                    Image3c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image05_resized_resized}
                    Image3d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image05_resized_resized_resized}
                    Image4 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image06}
                    Image4b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image06_resized}
                    Image4c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image06_resized_resized}
                    Image4d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image06_resized_resized_resized}
                    Image5 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image07}
                    Image5b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image07_resized}
                    Image5c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image07_resized_resized}
                    Image5d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image07_resized_resized_resized}
                    Image6 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image08}
                    Image6b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image08_resized}
                    Image6c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image08_resized_resized}
                    Image6d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image08_resized_resized_resized}
                    Image7 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image09}
                    Image7b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image09_resized}
                    Image7c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image09_resized_resized}
                    Image7d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image09_resized_resized_resized}
                    Image8 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image10}
                    Image8b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image10_resized}
                    Image8c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image10_resized_resized}
                    Image8d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image10_resized_resized_resized}
                    Image9 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image11}
                    Image9b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image11_resized}
                    Image9c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image11_resized_resized}
                    Image9d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image11_resized_resized_resized}
                    Image10 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image12}
                    Image10b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image12_resized}
                    Image10c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image12_resized_resized}
                    Image10d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image12_resized_resized_resized}
                    Image11 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image13}
                    Image11b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image13_resized}
                    Image11c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image13_resized_resized}
                    Image11d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image13_resized_resized_resized}
                    Image12 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image14}
                    Image12b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image14_resized}
                    Image12c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image14_resized_resized}
                    Image12d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image14_resized_resized_resized}
                    Image13 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image15}
                    Image13b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image15_resized}
                    Image13c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image15_resized_resized}
                    Image13d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image15_resized_resized_resized}
                    Image14 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image16}
                    Image14b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image16_resized}
                    Image14c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image16_resized_resized}
                    Image14d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image16_resized_resized_resized}
                    Image15 = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image17}
                    Image15b = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image17_resized}
                    Image15c = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image17_resized_resized}
                    Image15d = {images.HowToDieAloneEthaniel_Snow_Portfolio_Image17_resized_resized_resized}
                />

                {/* Removed due to lack of content */}
                {/* <GALLERY_CARD
                    Title = "The Way Home"
                    Image = {project3}
                    TitleSide = "projectTitleRight"
                /> */}

                <GALLERY_CARD
                    Title = "Orphan Black Echoes - S1"
                    Date = "2022"
                    Position = "2st Assistant Art Director"
                    CardImage = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image19_resized_resized}
                    Image1 = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image19}
                    Image1b = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image19_resized}
                    Image1c = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image19_resized_resized}
                    Image1d = {images.OrphanBlackEchoesS1Ethaniel_Snow_Portfolio_Image1_resized_resized_resized9}
                    Image2 = {images.OrphanBlackEchoesS1BostonApartment_2}
                    Image2b = {images.OrphanBlackEchoesS1BostonApartment_2_resized}
                    Image2c = {images.OrphanBlackEchoesS1BostonApartment_2_resized_resized}
                    Image2d = {images.OrphanBlackEchoesS1BostonApartment__resized_resized_resized2}
                    Image3 = {images.OrphanBlackEchoesS1JulesCondo}
                    Image3b = {images.OrphanBlackEchoesS1JulesCondo_resized}
                    Image3c = {images.OrphanBlackEchoesS1JulesCondo_resized_resized}
                    Image3d = {images.OrphanBlackEchoesS1JulesCond_resized_resized_resizedo}
                    Image4 = {images.OrphanBlackEchoesS1JulesCondo_2}
                    Image4b = {images.OrphanBlackEchoesS1JulesCondo_2_resized}
                    Image4c = {images.OrphanBlackEchoesS1JulesCondo_2_resized_resized}
                    Image4d = {images.OrphanBlackEchoesS1JulesCondo__resized_resized_resized2}
                    Image5 = {images.OrphanBlackEchoesS1PaperCave_4}
                    Image5b = {images.OrphanBlackEchoesS1PaperCave_4_resized}
                    Image5c = {images.OrphanBlackEchoesS1PaperCave_4_resized_resized}
                    Image5d = {images.OrphanBlackEchoesS1PaperCave__resized_resized_resized4}
                    Image6 = {images.OrphanBlackEchoesS1Playground}
                    Image6b = {images.OrphanBlackEchoesS1Playground_resized}
                    Image6c = {images.OrphanBlackEchoesS1Playground_resized_resized}
                    Image6d = {images.OrphanBlackEchoesS1Playgroun_resized_resized_resizedd}
                    Image7 = {images.OrphanBlackEchoesS1QuonsetHut_2}
                    Image7b = {images.OrphanBlackEchoesS1QuonsetHut_2_resized}
                    Image7c = {images.OrphanBlackEchoesS1QuonsetHut_2_resized_resized}
                    Image7d = {images.OrphanBlackEchoesS1QuonsetHut__resized_resized_resized2}
                    Image8 = {images.OrphanBlackEchoesS1Tina_sHouse}
                    Image8b = {images.OrphanBlackEchoesS1Tina_sHouse_resized}
                    Image8c = {images.OrphanBlackEchoesS1Tina_sHouse_resized_resized}
                    Image8d = {images.OrphanBlackEchoesS1Tina_sHous_resized_resized_resizede}
                    Image9 = {images.OrphanBlackEchoesS1UndergroundEntrance}
                    Image9b = {images.OrphanBlackEchoesS1UndergroundEntrance_resized}
                    Image9c = {images.OrphanBlackEchoesS1UndergroundEntrance_resized_resized}
                    Image9d = {images.OrphanBlackEchoesS1UndergroundEntranc_resized_resized_resizede}
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