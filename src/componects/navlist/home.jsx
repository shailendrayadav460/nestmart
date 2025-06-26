import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

function Home() {
    const [showHomePopup,setshowHomePopup] = useState(false)
  return (
      <>
          <ul onMouseLeave={() => setshowHomePopup(false)}
           onMouseEnter={() => setshowHomePopup(true)} >
              <li
                  
                  style={{ position: 'relative' }}
              >
                  <a id='artft' href='/'><span>Home <FaAngleDown /></span></a>
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
      </>
  )
}

export default Home
