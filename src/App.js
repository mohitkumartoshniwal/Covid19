import './App.css';
import Contact from './components/Contact/Contact';
import Contagion from './components/Contagion/Contagion';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/Navbar/NavBar';
import Overview from './components/Overview/Overview';
import Prevention from './components/Prevention/Prevention';
import Symptoms from './components/Symptoms/Symptoms';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <Overview/>
      <Contagion/>
      <Symptoms/>
      <Prevention/>
      <Contact/>
      <h1>Treatment</h1>
      <Footer/>
      <img src="/images/third_virus.svg" alt="" className="third_virus"/>
     
      <img src="/images/ninth_virus.svg" alt="" className="ninth_virus"/>
      <img src="/images/tenth_virus_half.svg" alt="" className="tenth_virus_half"/>
      
    </div>
  );
}

export default App;
