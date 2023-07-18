import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { Contact } from "./components/Pages/Contact/Contact";
import { Opportunity } from "./components/Pages/Opportunity/Opportunity";
import { OpportunityInfo } from "./components/Pages/OpportunityInfo/OpportunityInfo.js";
import { Disclaimer } from "./components/Pages/AuxiliaryPages/Disclaimer";
import { TermsOfServices } from "./components/Pages/AuxiliaryPages/TermsOfServices";
import { PrivacyPolicy } from "./components/Pages/AuxiliaryPages/PrivacyPolicy";


import FooterLinks from "./components/Pages/AuxiliaryPages/FooterLinks";



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/opportunity/:id" element={<OpportunityInfo/>} />
            <Route path="/disclaimer" element={<Disclaimer/>} />
            <Route path="/terms-of-services" element={<TermsOfServices/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          </Routes>
        </div>
        <FooterLinks/>

      </Router>
  </>
  );
}

export default App;
