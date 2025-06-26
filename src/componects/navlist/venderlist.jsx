import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"


function Venderlist() {
    const [showVenderPopup, setshowVenderPopup] =useState(false)
  return (
      <div>
          <ul  >
              <li
                  onMouseEnter={() => setshowVenderPopup(true)}
                  onMouseLeave={() => setshowVenderPopup(false)}
                  style={{ position: 'relative' }}
              >
                  <a id='artft' href='/'><span>Venders <FaAngleDown /></span></a>
                  {showVenderPopup && (
                      <div className="oieruet" >
                          <ul>
                              <li className='pb-1 pt-3'><a id='artfttg' href='#'>Vendors Grid</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Vendors List</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Vendor Details 01</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Vendor Details 02</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Vendor Dashboard</a></li>
                              <li className='pb-3 pt-1'><a id='artfttg' href='#'>Vendor Guide</a></li>
                          </ul>
                      </div>
                  )}
              </li>
          </ul>
      </div>
  )
}

export default Venderlist
