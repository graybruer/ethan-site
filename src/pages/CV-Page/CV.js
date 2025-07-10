import './CV.css'
import './CV-Breakpoints.css'
import CV_CARD from '../../components/cv-card/CV_Card';
import { motion } from 'framer-motion';

const CV = () => {

    return (

        <motion.div className="cv"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 0.25}}}
                    exit={{opacity: 0}}
                    transition={{ease: 'linear', duration: 0.25}}>

            <article className='cvContent'>

                <div className='cvSection'>
                    <h1>Filmwork</h1>

                    <div className='filmworkText'>
                            <label htmlFor="responsibilitiesList">
                                <h3 className='cvSubheading'>Experienced in:</h3>
                            </label>
                        <div className='rlHolder'>
                            <ul className='responsibilitiesList list'>
                                <li>Set Design & Management</li>
                                <li>Conceptual Renderings</li>
                                <li>Studio Plan Management</li>
                                <li>Overseeing Trainee Work</li>
                                <li>Minor Graphic Work</li>
                                <li>Location Measures</li>
                                <li>Set Prep & Opening</li>
                                <li>Script Breakdowns</li>
                                <li>Tech Pack Preparation</li>
                                <li>Managing Production Calendar & Cashet</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filmwork'>
                    <CV_CARD Title="Kiss of Death"
                                 Date="2024"
                                 Company="(Blumhouse)"
                                 Position="1st Assitant Art Director"/>
                        <CV_CARD Title="Ginny and Georgia, Season 3"
                                 Date="2024"
                                 Company="(Netflix)"
                                 Position="1st Assitant Art Director"/>
                        <CV_CARD Title="How to Die Alone, Season 1"
                                 Date="2023"
                                 Company="(Disney/Onyx)"
                                 Position="1st Assitant Art Director"/>
                        <CV_CARD Title="The Way Home, Season 2"
                                 Date="2023"
                                 Company="(Hallmark / Neshama)"
                                 Position="1st Assitant Art Director"/>
                        <CV_CARD Title="Orphan Black: Echoes, Season 1"
                                 Date="2022"
                                 Company="(AMC / Boat Rocker)"
                                 Position="2nd Assitant Art Director"/>
                        <CV_CARD Title="Departure, Season 3"
                                 Date="2021"
                                 Company="(Shaftesbury)"
                                 Position="Trainee Assistant Art Director / COVID Manager"/>
                        <CV_CARD Title="Ruby and the Well, Season 1"
                                 Date="2021"
                                 Company="(Shaftesbury)"
                                 Position="Trainee / 2nd Assistant Art Director"/>
                    </div>
                </div>

                <div className='cvSection'>
                    <div className='skills'>
                        <ul className='industrySkillsList list'>
                            <label htmlFor="industrySkillsList">
                                <h1>INDUSTRY SKILLS</h1>
                            </label>
                            <li>Proficient at Designing Accuratly Scaled Sets from Reference Images</li>
                            <li>Drafting Set Plans and Models</li>
                            <li>Sourcing Colours, Materials, and Finishes</li>
                            <li>Managing Location Set Up (Measure, Install, Etc.)</li>
                            <li>Creating Breakdowns for Sets/ Graphics</li>
                            <li>Excel at Spotting Continuity Errors in all Aspects (Graphics, Sets, Scripts, Etc.)</li>
                            <li>Managing Calendar, Tech Packs, and Budgets (incl. Cashet for Department)</li>
                            <li>Experience Designing Rigs for Grip Deptartment Needs (Used On and Off Camera)</li>
                        </ul>
                        <ul className='softwareExperienceList list'>
                            <label htmlFor="softwareExperienceList">
                                <h1>SOFTWARE EXPERIENCE</h1>
                            </label>
                            <li>AutoCADLT</li>
                            <li>SketchUP + Enscape</li>
                            <li>Microsoft Office Suite</li>
                            <li>Photoshop</li>
                            <li>InDesign</li>
                            <li>Other Adobe Suite</li>
                            <li>Procreate</li>
                        </ul>
                        <ul className='designSkillsList list'>
                            <label htmlFor="designSkillsList">
                                <h1>DESIGN SKILLS</h1>
                            </label>
                            <li>Very fast when working in AutoCAD</li>
                            <li>Excellent space planning abilities</li>
                            <li>Project Management and Budgeting</li>
                            <li>Strong research skills</li>
                            <li>Experience reading and using the Building Code</li>
                        </ul>
                        <ul className='generalSkillsList list'>
                            <label htmlFor="generalSkillsList">
                                <h1>GENERAL SKILLS</h1>
                            </label>
                            <li>Strong Drawing and Illustration Skills</li>
                            <li>Strong Knowledge of Construction and Building Methods</li>
                            <li>Residential Renovation Contracting and Demolition Experience (incl. Operating Heavy Machinery)</li>
                            <li>Detail Oriented / Highly Organized</li>
                            <li>Strong Interest in Historical and Mythological Studies</li>
                            <li>Excellent at Finding Effective Solutions to Problems</li>
                            <li>Work Well Under Pressure</li>
                            <li>Enjoy Fast Paced Environments</li>
                            <li>Great Interpersonal Skills</li>
                            <li>10+ Years of Driving Experience, Downtown/Rural</li>
                            <li>Work Well in a Team or Alone</li>
                            <li>Intrinsically Motivated</li>
                            <li>First Aid, CPR, and AED Training</li>
                        </ul>
                    </div>
                </div>

                <div className='cvSection'>
                    <div className='education'>
                        <label htmlFor="educationList">
                            <h1>EDUCATION</h1>
                        </label>
                        <div className='educationList'>
                            <ul className='educationList1 list'>
                                <h3>Honours Bachelor's Degree - Interior Design Sheridan College 2013 - 2017</h3>
                                <li>Graduated with high honours (3.8 GPA)</li>
                                <li>Undergraduate Certificate in Creativity and Problem Solving</li>
                                <li>Recipient of Faculty Award at Program Completion</li>
                            </ul>
                            <ul className='educationList2 list'>
                                <h3>Ontario College of Art and Design (OCADU) 2011-2013</h3>
                                <li>Studied life drawing, animation, jewellery smithing, and art/ material art history</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </article>

        </motion.div>
    );
};

export default CV;