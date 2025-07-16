import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navfirst from './componects/navfirst';
import Navii from './componects/Navii';
import Naviii from './componects/nav3rd';
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
import Cardafdfdd from './componects/Cardiii';
import Cardiv from './componects/cardiv';
import Cardvx from './componects/cardv5';
import Sixcard from './componects/Cardsix';
import Secndp from './componects/secndp';
import Comparepg from './componects/comparepg';
import Wishlist from './componects/wishlist';
import Cardboxcb from './componects/card';
import Account from './componects/account';
import Logout from './componects/logout';
import Home2Card from './componects/Home2';
import ProductCard from './componects/details';
import ScrollToTop from './componects/ScrollToTop';
import PopupModal from './componects/PopupModal';
import Snackitems from './componects/snack page/SnackItems';
import Contactpages from './componects/ContactPages/Contactpages';
function Home() {
  return (
    <>
      <PopupModal />
      <CarouselFirst />
      <Navfour />
      <Cardafdfdd />
      <ImageCard />
      <Navfive />
      <Cardiv />
      <NavSix />
      <Cardvx />
      <Navsevenx />
      <Sixcard />
      <Tablesveg />
      <Home2Card />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navfirst />
      <Navii />
      <Naviii />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Snack" element={<Snackitems />} />
        <Route path="/Contact" element={<Contactpages/>} />
        <Route path="/Compare" element={<Comparepg />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/secndp" element={<Secndp />} />
        <Route path="/cart" element={<Cardboxcb />} />
        <Route path="/account" element={<Account />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
      <HomePage />
      <Cardeight />
      <LastSecondT />
      <Navend />
    </BrowserRouter>
  );
}

export default App

