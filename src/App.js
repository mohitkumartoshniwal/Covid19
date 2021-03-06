import './App.css';
import Contact from './components/Contact/Contact';
import Contagion from './components/Contagion/Contagion';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/Navbar/NavBar';
import Overview from './components/Overview/Overview';
import Prevention from './components/Prevention/Prevention';
import Report from './components/Report/Report';
import Symptoms from './components/Symptoms/Symptoms';


function App() {
  return (
    <div className="App">
      <div className="gradient">
        <NavBar />
        <HeroSection />
      </div>
      <Overview />
      <Contagion />
      <Symptoms />
      <Prevention />
      <Report />
      <Contact />
      <Footer />
      <img src="/images/third_virus.svg" alt="" className="third_virus" />

      <img src="/images/ninth_virus.svg" alt="" className="ninth_virus" />
      <img src="/images/tenth_virus_half.svg" alt="" className="tenth_virus_half" />

    </div>
  );
}

export default App;
