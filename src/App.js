import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import Empty from './pages/Empty-Page/Empty';
import About from './pages/About-Page/About';
import CV from './pages/CV-Page/CV';
import Footer from './components/footer/Footer';

function App() {

  const location = useLocation();

  return (
    <div className="App">
    <div id='wrapper'>
      <Header/>
      <main id='pageContent'>
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Empty/>} />
          {/* <Route path="/gallery" element={<Gallery/>} /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/contact" element={<Empty/>} />
        </Routes>
        </AnimatePresence>
      </main>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
