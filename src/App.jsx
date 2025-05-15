import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import AOS from "aos";
import 'aos/dist/aos.css';

// Lazy loaded components (only Hero and About)
const Hero = lazy(() => import("./Component/Hero/Hero"));
const About = lazy(() => import("./Component/About/About"));

// Direct imports
import Pretty from "./Component/Pretty/Pretty";
import Contact from "./Component/Contact/Contact";
import HorticultureProject from "./Component/BusinessVertical/HorticultureProject";
import AgricultureProducts from './Component/BusinessVertical/AgricultureProducts';
import OtherProducts from './Component/BusinessVertical/OtherProducts';
import Prducts from './Component/BusinessVertical/Prducts';
import Aboutus from './Component/About/Aboutus';
import SpeedBreedingFacility from './Component/Prducts/SpeedBreedingFacility';
import MistChambers from './Component/Prducts/MistChamber';
import PlugTypeNurseyProduction from './Component/Prducts/PlugTypeNurseyProduction';
import NetHouse from './Component/Prducts/NetHouse';
import PlantPhonemicsFacilityfrom from './Component/Prducts/PlantPhonemicsFacility';
import NaturallyVentilatedPolyhouse from './Component/Prducts/NaturallyVentilatedPolyhouse';
import TransgenicGreenhouse from './Component/Prducts/TransgenicGreenhouse';
import GREENHOUSEATSNOWCOVEREDREGION from './Component/Prducts/GREENHOUSEATSNOWCOVEREDREGION';
import Enquire from './Component/Enquire/Enquire';
import SeedlingTray from './Component/AgricultureProducts/SeedlingTray';
import Pots from './Component/AgricultureProducts/Pots';
import RootTrainer from './Component/AgricultureProducts/RootTrainer';
import SeedDisplayer from './Component/AgricultureProducts/SeedDisplayer';
import Clips from './Component/AgricultureProducts/Clips';
import Media from './Component/AgricultureProducts/Media';
import Nepal from './Component/International/Nepal';
import Bangladesh from './Component/International/Bangladesh';
import Bhutan from './Component/International/Bhutan';
import GhanaAfrica from './Component/International/GhanaAfrica';
import Enquiree from './Component/Enquire/Enquiree';
import Greenhouses from './Component/HortiProject/Greenhouses';
import Print from './Component/Print/Print';
import Contacte from './Component/Contact/Contacte';
import Carrer from './Component/Carrer/Carrer';
import CenterOfExcellence from './Component/HortiProject/CenterOfExcellence';
import Aeroponicfacility from './Component/HortiProject/Aeroponicfacility';
import Hydroponicsystem from './Component/HortiProject/Hydroponicsystem';
import RetractableGreenHouse from './Component/HortiProject/RetractableGreenHouse';
import Subscribe from './Component/Testimonial/Subscribe';
import RainoutShetler from './Component/Prducts/RainoutShetler';
import TurnkeyProject from './Component/HortiProject/TurnkeyProject';
import Gallery from './Component/Carrer/Gallery';
import Associate from './Component/Pretty/ASSOCIATE';
import PrivacyPolicy from './Component/Policy/PrivatePolicy';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-blue dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<><Hero /><About /><Print /><Pretty /><Contacte /></>} />
          </Routes>
        </Suspense>

        <Routes>
          <Route path="/contact" element={<><Contact /><Subscribe /><Associate /></>} />
          <Route path="/Carrer" element={<><Carrer /><Subscribe /></>} />
          <Route path="/Enquire" element={<Enquire />} />
          <Route path="/RootTrainer" element={<><RootTrainer /><Enquiree /></>} />
          <Route path="/Greenhouses" element={<><Greenhouses /><Enquiree /></>} />
          <Route path="/HortiProjects" element={<HorticultureProject />} />
          <Route path="/Agricultureproducts" element={<AgricultureProducts />} />
          <Route path="/Otherproducts" element={<OtherProducts />} />
          <Route path="/Aboutus" element={<><Aboutus /><Contacte /></>} />
          <Route path="/SpeedBreedingFacility" element={<><SpeedBreedingFacility /><Enquiree /></>} />
          <Route path="/MistChamber" element={<><MistChambers /><Enquiree /></>} />
          <Route path="/PlugTypeNurseyProduction" element={<><PlugTypeNurseyProduction /><Enquiree /></>} />
          <Route path="/PlantPhonemicsFacility" element={<><PlantPhonemicsFacilityfrom /><Enquiree /></>} />
          <Route path="/NetHouse" element={<><NetHouse /><Enquiree /></>} />
          <Route path="/NaturallyVentilatedPolyhouse" element={<><NaturallyVentilatedPolyhouse /><Enquiree /></>} />
          <Route path="/TransgenicGreenhouse" element={<><TransgenicGreenhouse /><Enquiree /></>} />
          <Route path="/GREENHOUSEATSNOWCOVEREDREGION" element={<><GREENHOUSEATSNOWCOVEREDREGION /><Enquiree /></>} />
          <Route path="/SeedlingTray" element={<><SeedlingTray /><Enquiree /></>} />
          <Route path="/Pots" element={<><Pots /><Enquiree /></>} />
          <Route path="/SeedDisplayer" element={<><SeedDisplayer /><Enquiree /></>} />
          <Route path="/Clips" element={<><Clips /><Enquiree /></>} />
          <Route path="/Media" element={<><Media /><Enquiree /></>} />
          <Route path="/Nepal" element={<><Nepal /><Enquiree /></>} />
          <Route path="/Bangladesh" element={<><Bangladesh /><Enquiree /></>} />
          <Route path="/Bhutan" element={<><Bhutan /><Enquiree /></>} />
          <Route path="/GhanaAfrica" element={<><GhanaAfrica /><Enquiree /></>} />
          <Route path="/Aeroponicfacility" element={<><Aeroponicfacility /><Enquiree /></>} />
          <Route path="/Hydroponicsystem" element={<><Hydroponicsystem /><Enquiree /></>} />
          <Route path="/CenterOfExcellence" element={<><CenterOfExcellence /><Enquiree /></>} />
          <Route path="/RetractableGreenHouse" element={<><RetractableGreenHouse /><Enquiree /></>} />
          <Route path="/RainoutShetler" element={<><RainoutShetler /><Enquiree /></>} />
          <Route path="/TurnkeyProject" element={<><TurnkeyProject /><Enquiree /></>} />
          <Route path="/Gallery" element={<><Gallery /><Enquiree /></>} />
          <Route path="/Associate" element={<Associate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
