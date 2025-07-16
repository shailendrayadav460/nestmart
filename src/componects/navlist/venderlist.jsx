import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

function Venderlist() {
  const [showVenderPopup, setShowVenderPopup] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowVenderPopup(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowVenderPopup(false);
    }, 150); // 150ms delay
  };

  return (
    <div>
      <ul>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }}
        >
          <a id="artft" href="/">
            <span>
              Venders <FaAngleDown />
            </span>
          </a>
          {showVenderPopup && (
            <div className="oieruet">
              <ul>
                <li className="pb-1 pt-3">
                  <a id="artfttg" href="#">Vendors Grid</a>
                </li>
                <li className="pb-1 pt-1">
                  <a id="artfttg" href="#">Vendors List</a>
                </li>
                <li className="pb-1 pt-1">
                  <a id="artfttg" href="#">Vendor Details 01</a>
                </li>
                <li className="pb-1 pt-1">
                  <a id="artfttg" href="#">Vendor Details 02</a>
                </li>
                <li className="pb-1 pt-1">
                  <a id="artfttg" href="#">Vendor Dashboard</a>
                </li>
                <li className="pb-3 pt-1">
                  <a id="artfttg" href="#">Vendor Guide</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Venderlist;
