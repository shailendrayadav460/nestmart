
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CiLocationArrow1 } from "react-icons/ci";

function CarouselFirst() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <div>
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
              <Carousel.Item>
                  <div className="carousel-slide" style={{ backgroundImage: "url('https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-1.png')" }} >
                      <h1 id='hedinbg'>Don't miss amazing<br /> grocery deals</h1><br />
                      <p>Sign up for the daily newsletter</p><br />
                      <div className='emailsub'>
                         <div className='emailaddd'><input className='emailadd' type='email' placeholder='Your email address'></input> </div>
                          <div className='subscribe'>Subscribe</div>
                      </div>
                  </div>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="carousel-slide" style={{ backgroundImage: "url('https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-2.png')" }} >
                      <h1 id='hedinbg'>Fresh Vegetables<br /> Big discount</h1><br />
                      <p>Save up for 50 %the daily newsletter</p><br />
                      <div className='emailsub'>
                         <div className='emailaddd'><input className='emailadd' type='email' placeholder='Your email address'></input> </div>
                          <div className='subscribe'>Subscribe</div>
                      </div>
                  </div>
              </Carousel.Item>
          </Carousel>
      </div>
  );
}
export default CarouselFirst;

