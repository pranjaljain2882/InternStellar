import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { Contact } from "./components/Pages/Contact/Contact";
import { Opportunity } from "./components/Pages/Opportunity/Opportunity";
import { OpportunityInfo } from "./components/Pages/OpportunityInfo/OpportunityInfo.js";
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
          </Routes>
        </div>
        <FooterLinks/>

      </Router>
  </>
  );
}

export default App;
