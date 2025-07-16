import React, { useState, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

function BroallCoteg() {
  const [showHomePopup, setShowHomePopup] = useState(false);
  const timeoutRef = useRef(null);

  const categories = [
    'Milks and Dairies',
    'Wines & Alcohol',
    'Clothing & Beauty',
    'Pet Foods & Toy',
    'Fast Food',
    'Baking Material',
    'Vegetables',
    'Fresh Seafood',
    'Noodles & Rice',
    'Ice Cream',
    'Wines & Alcohol',
    'Clothing & Beauty',
    'Pet Foods & Toy',
    'Fast Food',
    'Baking Material',
    'Vegetables',
    'Fresh Seafood',
    'Noodles & Rice',
    'Ice Cream'
  ];

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowHomePopup(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowHomePopup(false);
    }, 150);
  };

  return (
    <div>
      <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <li style={{ position: 'relative' }}>
          <a id="poiuytrtyu" href="/">
            <span>
              All Browse Categories <FaAngleDown />
            </span>
          </a>
          {showHomePopup && (
            <div className="oieruet scrollable-dropdown">
              <ul>
                {categories.map((cat, index) => (
                  <li className="pb-1 pt-1" key={index}>
                    <a id="artfttg" href="#">{cat}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default BroallCoteg;
