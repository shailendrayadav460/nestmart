
import Carousel from 'react-bootstrap/Carousel';
import { CiLocationArrow1 } from "react-icons/ci";
import Image from 'react-bootstrap/esm/Image';

function HomePage() {
  return (
      <div>
          <div className='dsigdfsgg' >
              <div className='afdgf'>
                  <h1 >Stay home & get your daily<br/> needs from our shop</h1><br />
                  <p>Start You'r Daily Shopping with <span id='nober'>Nest Mart </span></p><br />
                  <div className='emailsub'>
                      <div className='emailadd'><CiLocationArrow1 /> Your email address </div>
                      <div className='subscribe'>Subscribe</div>
                  </div>
              </div  >
              <div > <Image className='imafger' src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png" rounded />
              </div>
          </div>
      </div>
  )
}
export default HomePage

