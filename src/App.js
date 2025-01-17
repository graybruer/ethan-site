import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import Empty from './pages/Empty-Page/Empty';
import Gallery from './pages/Gallery-Page/Gallery';
  import KissOfDeath from './pages/Gallery-Page/Gallery-SubPages/KissOfDeath';
  import GinnyAndGeorgia from './pages/Gallery-Page/Gallery-SubPages/GinnyAndGeorgia';
  import CommonGround from './pages/Gallery-Page/Gallery-SubPages/CommonGround';
  import HowToDieAlone from './pages/Gallery-Page/Gallery-SubPages/HowToDieAlone';
  import TheWayHome from './pages/Gallery-Page/Gallery-SubPages/TheWayHome';
  import OrphanBlackEchoes from './pages/Gallery-Page/Gallery-SubPages/OrphanBlackEchoes';
  import RubyAndTheWell from './pages/Gallery-Page/Gallery-SubPages/RubyAndTheWell';
import About from './pages/About-Page/About';
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
          <Route path="/"                     element={<Empty/>} />
          <Route path="/about"                element={<About/>} />
          <Route path="/gallery"              element={<Gallery/>} />
            <Route path="kiss-of-death"         element={<KissOfDeath/>}></Route>
            <Route path="ginny-and-georgia"     element={<GinnyAndGeorgia/>}></Route>
            <Route path="common-ground"         element={<CommonGround/>}></Route>
            <Route path="how-to-die-alone"      element={<HowToDieAlone/>}></Route>
            <Route path="the-way-home"          element={<TheWayHome/>}></Route>
            <Route path="orphan-black-echoes"   element={<OrphanBlackEchoes/>}></Route>
            <Route path="ruby-and-the-well"     element={<RubyAndTheWell/>}></Route>
          <Route path="/cv"                   element={<CV/>} />
          <Route path="/contact"              element={<Contact/>} />
        </Routes>
        </AnimatePresence>
      </main>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
