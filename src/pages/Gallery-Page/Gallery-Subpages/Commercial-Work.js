import { motion } from 'framer-motion';
import imageImporter from '../../../utils/imageImporter';
import SubGalleryPageCommercial from '../../../components/Sub_Gallery/Sub_Gallery_Page_Commercial';


const BMS2SubGallery = () => {

    const images = imageImporter();

    return (
        //  reference: https://www.framer.com/motion/component/
        //  also: https://www.youtube.com/watch?v=0Q5a9ta5m0s

        <motion.div className="SubGallery"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>
            
            <SubGalleryPageCommercial
                Title = "Commercial Work"
                Date = ""
                Position = ""
                ProjectImages = {{
                                Image1: images.CommercialWorkBell_DiningRoom_View1_V4,
                                Image2: images.CommercialWorkBell_DiningRoom_View2_V4,
                                Image3: images.CommercialWorkBell_DiningRoom_View3_V4,
                                Image4: images.CommercialWorkBell_DiningRoom_View4_V4,
                                Image5: images.CommercialWorkBell_TrainCar,
                                Image6: images.CommercialWorkEckrichSausage_3DModel,
                                Image7: images.CommercialWorkEckrichSausage_ScaleModel,
                                Image8: images.CommercialWorkFireTV_Fantasy_01,
                                Image9: images.CommercialWorkFireTV_Fantasy_02,
                                Image10: images.CommercialWorkFireTV_Fantasy_03,
                                Image11: images.CommercialWorkFireTV_Fantasy_04,
                                Image12: images.CommercialWorkFireTV_Football_01,
                                Image13: images.CommercialWorkFireTV_Football_01,
                                Image14: images.CommercialWorkFireTV_Football_02,
                                Image15: images.CommercialWorkFourLeaf_BabyDiningRoom_V3_20250312,
                                Image16: images.CommercialWorkFourLeaf_Office1_V3_20250316,
                                }}
            />

        </motion.div>
    );
};

export default BMS2SubGallery;