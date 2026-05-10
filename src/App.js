import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import Empty from './pages/Empty-Page/Empty';
import About from './pages/About-Page/About';
import Gallery from './pages/Gallery-Page/Gallery';
  import BMS2SubGallery from './pages/Gallery-Page/Gallery-Subpages/Brilliant-Minds-Season-2';
  import CommercialWorkSubGallery from './pages/Gallery-Page/Gallery-Subpages/Commercial-Work';
  import SPS1SubGallery from './pages/Gallery-Page/Gallery-Subpages/Sterling-Point-Season-1';
  import RGSubGallery from './pages/Gallery-Page/Gallery-Subpages/Relationship-Goals';
  import KoDSubGallery from './pages/Gallery-Page/Gallery-Subpages/Kiss-Of-Death';
  import GaGSubGallery from './pages/Gallery-Page/Gallery-Subpages/Ginny-And-Georgia';
  import HtDASubGallery from './pages/Gallery-Page/Gallery-Subpages/How-To-Die-Alone';
  import OBES1SubGallery from './pages/Gallery-Page/Gallery-Subpages/Orphan-Black-Echoes-Season-1';
import CV from './pages/CV-Page/CV';
import Contact from './pages/Contact-Page/Contact';
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  });


  const location = useLocation();

  return (
    <div className="App">
    <div id='wrapper'>
      <Header/>
      <main id='pageContent'>
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/"                                          element={<Empty/>} />
          <Route path="/about"                                     element={<About/>} />
          <Route path="/gallery"                                   element={<Gallery/>} />
              <Route path="/gallery/commercial-work"                  element={<CommercialWorkSubGallery/>} />
              <Route path="/gallery/brilliant-minds-season-2"         element={<BMS2SubGallery/>} />
              <Route path="/gallery/sterling-point-season-1"          element={<SPS1SubGallery/>} />
              <Route path="/gallery/relationship-goals"               element={<RGSubGallery/>} />
              <Route path="/gallery/kiss-of-death"                    element={<KoDSubGallery/>} />
              <Route path="/gallery/ginny-and-georgia"                element={<GaGSubGallery/>} />
              <Route path="/gallery/how-to-die-alone"                 element={<HtDASubGallery/>} />
              <Route path="/gallery/orphan-black-echoes-season-1"     element={<OBES1SubGallery/>} />
          <Route path="/cv"                                        element={<CV/>} />
          <Route path="/contact"                                   element={<Contact/>} />
        </Routes>
        </AnimatePresence>
      </main>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
