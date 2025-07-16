import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

function Pages() {
  const [showPages, setShowPages] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowPages(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPages(false);
    }, 150);
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
            <span>Pages <FaAngleDown /></span>
          </a>
          {showPages && (
            <div className="oieruetrtc">
              <ul>
                <li className="pb-1 pt-3"><a id="artfttg" href="#">About Us</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Contact</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">My Account</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Login</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Register</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Forgot Password</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Reset Password</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Purchase Guide</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Privacy Policy</a></li>
                <li className="pb-1 pt-1"><a id="artfttg" href="#">Terms of Service</a></li>
                <li className="pb-3 pt-1"><a id="artfttg" href="#">404 Page</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Pages;
