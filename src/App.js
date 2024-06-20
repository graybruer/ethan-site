import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Empty from './pages/Empty-Page/Empty';
import About from './pages/About-Page/About';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <div id='wrapper'>
      <Header/>
      <div id='pageContent'>
        <Routes>
          <Route path="/" element={<Empty/>} />
          <Route path="/about" element={<About/>} />
          {/*
          <Route path="/cv" element={<CV/>} />
          <Route path="/contact" element={<Empty/>} />
          */}
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
