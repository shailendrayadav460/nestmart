import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

function Shop() {
  const [showPopup, setShowPopup] = useState(false);
  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout.current);
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowPopup(false);
    }, 150); // 150ms delay
  };

  return (
    <div>
      <ul>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <li>
            <a id='artft' href='/cart'>
              <span>Shop <FaAngleDown /></span>
            </a>
          </li>

          {showPopup && (
            <div
              className="oieruetsd"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                border: '1px solid #ccc',
                zIndex: 1000,
              }}
            >
              <ul>
                <li className='pb-1 pt-3'><a id='artfttg' href='#'>Grid – Right Sidebar</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Grid – Left Sidebar</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>List – Right Sidebar</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>List – Left Sidebar</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop– Wide</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Single Product</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop– Filter</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop– Wishlist</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop– Cart</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop– Checkout</a></li>
                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop– Compare</a></li>
                <li className='pb-3 pt-1'><a id='artfttg' href='#'>Invoice</a></li>
              </ul>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Shop;
