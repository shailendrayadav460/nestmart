import React, { useState, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

function Home() {
  const [showHomePopup, setShowHomePopup] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // cancel hide delay if re-hovered
    setShowHomePopup(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowHomePopup(false);
    }, 150); // ⏱️ adjust delay here
  };

  return (
    <ul onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <li style={{ position: 'relative' }}>
        <a id="artft" href="/">
          <span>
            Home <FaAngleDown />
          </span>
        </a>

        {showHomePopup && (
          <div className="oieruet">
            <ul>
              <li className="pb-1 pt-3">
                <a id="artfttg" href="/">
                  Home1
                </a>
              </li>
              <li className="pb-1 pt-1">
                <a id="artfttg" href="/Snack">
                  Home2
                </a>
              </li>
              <li className="pb-1 pt-1">
                <a id="artfttg" href="/Cart">
                  Home3
                </a>
              </li>
              <li className="pb-1 pt-1">
                <a id="artfttg" href="/Compare">
                  Home4
                </a>
              </li>
              <li className="pb-1 pt-1">
                <a id="artfttg" href="#">
                  Home5
                </a>
              </li>
              <li className="pb-3 pt-1">
                <a id="artfttg" href="#">
                  Home6
                </a>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
}

export default Home;

