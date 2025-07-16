import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

function ImageCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Snack');  
  };
  return (
      <div className='gfdgfd'>
          <div className='seccard' >
              <h4>Everyday Fresh &<br /> Clean with Our<br /> Products</h4>
              <button className='btm' onClick={handleClick} variant="success" > Shop now <GrLinkNext className='arrownext' /> </button>
          </div>
          <div className='seccard' >
              <h4>Everyday Fresh &<br /> Clean with Our<br /> Products</h4>
              <button className='btm' onClick={handleClick} variant="success" > Shop now <GrLinkNext className='arrownext' /> </button>
          </div>
          <div className='seccard' >
              <h4>Everyday Fresh &<br /> Clean with Our<br /> Products</h4>
              <button className='btm' onClick={handleClick} variant="success"  > Shop now <GrLinkNext className='arrownext' /> </button>
          </div>
      </div>
    
  );
}

export default ImageCard;
