import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function MegaMenupg() {
  const [showMegaMenulist, setShowMegaMenulist] = useState(false);
  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout.current);
    setShowMegaMenulist(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowMegaMenulist(false);
    }, 150); // Delay of 150ms
  };

  return (
    <div className="menu-wrapper" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <ul>
        <li>
          <a id="artft" href="/">
            <span>
              Mega Menu <FaAngleDown />
            </span>
          </a>
        </li>
      </ul>

      {showMegaMenulist && (
        <div className="irfdnkdfd bg-white">
          <div className="d-flex megamenu">
            <div>
              <li className="pb-1 pt-3"><h5>Fruit & Vegetables</h5></li>
              <li className="pb-1 pt-3"><a href="#">Meat & Poultry</a></li>
              <li className="pb-1 pt-1"><a href="#">Fresh Vegetables</a></li>
              <li className="pb-1 pt-1"><a href="#">Herbs & Seasonings</a></li>
              <li className="pb-1 pt-1"><a href="#">Cuts & Sprouts</a></li>
              <li className="pb-1 pt-1"><a href="#">Exotic Fruits & Veggies</a></li>
              <li className="pb-3 pt-1"><a href="#">Packaged Produce</a></li>
            </div>
            <div>
              <li className="pb-1 pt-3"><h5>Breakfast & Dairy</h5></li>
              <li className="pb-1 pt-3"><a href="#">Milk & Flavoured Milk</a></li>
              <li className="pb-1 pt-1"><a href="#">Butter and Margarine</a></li>
              <li className="pb-1 pt-1"><a href="#">Eggs Substitutes</a></li>
              <li className="pb-1 pt-1"><a href="#">Marmalades</a></li>
              <li className="pb-1 pt-1"><a href="#">Sour Cream</a></li>
              <li className="pb-3 pt-1"><a href="#">Cheese</a></li>
            </div>
            <div>
              <li className="pb-1 pt-3"><h5>Meat and Seafood</h5></li>
              <li className="pb-1 pt-3"><a href="#">Breakfast Sausage</a></li>
              <li className="pb-1 pt-1"><a href="#">Dinner Sausage</a></li>
              <li className="pb-1 pt-1"><a href="#">Chicken</a></li>
              <li className="pb-1 pt-1"><a href="#">Sliced Deli Meat</a></li>
              <li className="pb-1 pt-1"><a href="#">Wild Caught Fillets</a></li>
              <li className="pb-3 pt-1"><a href="#">Crab and Shellfish</a></li>
            </div>
            <div>
              <div className="hot-deals-box">
                <p>Hot Deals</p>
                <h4>
                  Don't miss <br /> Trending<br />
                  <span className="text-warning">Save up to 50%</span>
                </h4>
                <Button className="mt-2" variant="success">Shop Now</Button>
              </div>
              <img
                className="deal-image"
                src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png"
                alt="Deals"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenupg;
