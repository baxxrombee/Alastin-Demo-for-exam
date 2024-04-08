import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import ShopSkincare from "./components/shopSkincare/ShopSkincare";
import RountineBuilder from "./components/rountineBuilder/RountineBuilder";
import Home from "./components/home/Home";
import SkinScience from "./components/skinScience/SkinScience";
import About from "./components/about/About";
import Blush from "./components/shopSkincare/blush/Blush";
import Bronzer from "./components/shopSkincare/bronzer/Bronzer";
import Eyebrow from "./components/shopSkincare/eyebrow/Eyebrow";
import Eyeliner from "./components/shopSkincare/eyeliner/Eyeliner";
import SinglePage from "./components/singlePage/SinglePage";
import Eyeshadow from "./components/rountineBuilder/eyeshadow/Eyeshadow"
import Foundation from "./components/rountineBuilder/foundation/Foundation"
import Lipliner from "./components/rountineBuilder/lipliner/Lipliner"
import Lipstick from "./components/rountineBuilder/lipstick/Lipstick"
import Mascara from "./components/rountineBuilder/mascara/Mascara"
import NailPolish from "./components/rountineBuilder/nailPolish/NailPolish"
import Magazin from "./components/magazin/Magazin";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
          
        <Route path="/shopSkincare" element={<ShopSkincare />} />

        <Route path="/shopSkincare/blush" element={<Blush />} />
        <Route path="/shopSkincare/bronzer" element={<Bronzer />} />
        <Route path="/shopSkincare/eyebrow" element={<Eyebrow />} />
        <Route path="/shopSkincare/eyeliner" element={<Eyeliner />} />

        <Route path="/rountineBuilder" element={<RountineBuilder />} />

        <Route path="/rountineBuilder/eyeshadow" element={<Eyeshadow />} />
        <Route path="/rountineBuilder/foundation" element={<Foundation />} />
        <Route path="/rountineBuilder/lipliner" element={<Lipliner />} />
        <Route path="/rountineBuilder/lipstick" element={<Lipstick />} />
        <Route path="/rountineBuilder/mascara" element={<Mascara />} />
        <Route path="/rountineBuilder/nailPolish" element={<NailPolish />} />

        <Route path="/skinScience" element={<SkinScience />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-page/:id" element={<SinglePage />} />
        <Route path="/magazin/:id" element={<Magazin/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
