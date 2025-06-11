import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

function Cardsix() {
  return (
    <>
          <div className='Cardsix'>
              <div className='dsisix'>
                  <div className='sixtimedate'>00<p className='timedf' >Days</p></div>
                  <div className='sixtimedate'>00<p>Hours</p></div>
                  <div className='sixtimedate'>03<p>Mins</p></div>
                  <div className='sixtimedate'>01<p>Sec</p></div>
              </div>
              <div className='sixcardsfdfd'><div className='sixcard'>
                   <Card.Body >
                      <h6 className='parasna'>
                          Some quick example text to build on the card title .
                      </h6>
                      <div className='rating'>
                          <div className='ratingstar'>
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStar />
                              <IoIosStarHalf />
                          </div>
                          <div id='delet'>(4.0)</div>
                      </div>
                      <p className='old'>By <span id='heddet'>Old El Paso</span></p>
                      <div className='delt'>
                          <div className='delt' ><h6 id='heddet' >$28.85</h6>
                              <del id='delet'>$32.0</del></div>
                          <button className='btnsnak' ><HiOutlineShoppingCart /> Add</button>
                      </div>
                  </Card.Body>
              </div>
              </div>
          </div>
    </>
  );
}

export default Cardsix;