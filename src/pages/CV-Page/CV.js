import './CV.css'
import './CV-Breakpoints.css'
import { motion } from 'framer-motion';
import cvPNG from '../../assets/Ethan-cv-1.png'
// import { Document, Page, pdfjs } from 'react-pdf';
// import cvPDF from '../../assets/Ethan-cv.pdf'

const CV = () => {

    // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    //     'pdfjs-dist/build/pdf.worker.min.mjs',
    //     import.meta.url,
    //   ).toString();

    //USE THIS FOR DEPLOYMENT INSTEAD OF THE ONE ABOVE
    // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

    return (
        //  reference: https://www.framer.com/motion/component/
        // also: https://www.youtube.com/watch?v=0Q5a9ta5m0s
        <motion.div className="cv"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration:1.5}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.5}}>

            <article className='cvContent'>
                {/* <Document className='pdf' file={cvPDF}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
                </Document> */}
                <img src={cvPNG} alt="Ethaniel Snow Resume" className='resumeImage'></img>
            </article>

        </motion.div>
    );
};

export default CV;