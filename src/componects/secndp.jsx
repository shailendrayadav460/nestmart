import Cardth from './card3';
import Navsevenx from './nav7';
import Cardsix from './card6';
import SecondpageCard from './secondpageCard';
import SecondpgCardII from './secondpgCardII';
import IipageiiiCard from './iipageiiiCard';
import IipgltCard from './iipgltCard';
import Navsec from './navsec';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import NewPhagefirst from './second';
import HomePage from './home3';
import Cardeight from './card8';
import LastSecondT from './last2pade';
import Navend from './navend';




function Secndp() {
  return (
    <>
      <NewPhagefirst />
      <div className='d-flex pt-4 ms-3'>
        <div id='nsaffwiedt'>
          <Navsec />
          <div>
            <div>
              <div className='cardthird'>
                <Cardth />
                <Cardth />
                <Cardth />
                <Cardth />
              </div>
              <div className='cardthird'>
                <Cardth />
                <Cardth />
                <Cardth />
                <Cardth />
              </div>
              <div className='cardthird'>
                <Cardth />
                <Cardth />
                <Cardth />
                <Cardth />
              </div>
              <div className='cardthird'>
                <Cardth />
                <Cardth />
                <Cardth />
                <Cardth />
              </div>
              <div className='d-flex mb-2 mt-4'>
                <div id='hgdfd'><FaArrowLeft className='small' /></div>
                <div id='hgdfd'>1</div>
                <div id='hgdfds'>2</div>
                <div id='hgdfd'>3</div>
                <div id='hgdfdds'>...</div>
                <div id='hgdfd'>6</div>
                <div id='hgdfd'><FaArrowRight className='small' /></div>
              </div>
            </div>
            <Navsevenx />
            <div className='cardsixfdf' >
              <Cardsix />
              <Cardsix />
            </div>
          </div>
        </div>
        <div className="sidebar" id='nacfdfdgswie '>
          <SecondpageCard />
          <SecondpgCardII />
          <IipageiiiCard />
          <IipgltCard />
        </div>
      </div>
      <HomePage />
      <Cardeight />
      <LastSecondT />
      <Navend />
    </>
  )
}

export default Secndp
