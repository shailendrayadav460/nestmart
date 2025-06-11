import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navfirst from './componects/navfirst';
import CarouselFirst from './componects/Home1';
import Navfour from './componects/nav4';
import ImageCard from './componects/card2';
import Navfive from './componects/nav5';
import NavSix from './componects/nav6';
import Navsevenx from './componects/nav7';
import Tablesveg from './componects/tablesveg';
import HomePage from './componects/home3';
import Cardeight from './componects/card8';
import Navend from './componects/navend';
import LastSecondT from './componects/last2pade';
import NewPhagefirst from './componects/second';
import Naviii from './componects/nav3rd';
import Cardafdfdd from './componects/Cardiii';
import Navii from './componects/Navii';
import Cardiv from './componects/cardiv';
import Cardvx from './componects/cardv5';
import Sixcard from './componects/Cardsix';
import Secndp from './componects/secndp';

function Home() {
  return (
    <>
      {/* first nav */}
      <Navfirst />

      {/* second nav */}
      <Navii />

      {/* third nav */}
      <Naviii />

      {/* Carousel */}
      <CarouselFirst />

      {/* fourth nav */}
      <Navfour />

      {/* Cards and content */}
      <Cardafdfdd />
      <ImageCard />
      <Navfive />
      <Cardiv />
      <NavSix />
      <Cardvx />
      <Navsevenx />
      <Sixcard />
      <Tablesveg />
      <HomePage />
      <Cardeight />
      <LastSecondT />
      <Navend />
      <NewPhagefirst />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secndp" element={<Secndp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
