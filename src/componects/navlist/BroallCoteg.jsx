import React from 'react'
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'


function BroallCoteg() {
    const [showHomePopup,setshowHomePopup] = useState(false)
  return (
      <div>
          <ul onMouseLeave={() => setshowHomePopup(false)}
           onMouseEnter={() => setshowHomePopup(true)}>
              <li

                  style={{ position: 'relative' }}
              >
                  <a id='poiuytrtyu'  href='/'><span> All Browse Categories <FaAngleDown /></span></a>
                  {showHomePopup && (
                      <div className="oieruet" >
                          <ul>
                              <li className='pb-1 pt-3 '><a id='artfttg' href='#'>Home1</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Home2</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Home3</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Home4</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Home5</a></li>
                              <li className='pb-3 pt-1'><a id='artfttg' href='#'>Home6</a></li>
                          </ul>
                      </div>
                  )}
              </li>
          </ul>
      </div>
  )
}

export default BroallCoteg
