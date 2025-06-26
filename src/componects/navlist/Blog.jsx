import { FaAngleDown } from "react-icons/fa"
import { useState } from "react"


function Blogpg() {
    const [showBloglist, setshowBloglist] = useState(false)
  return (
      <div>
          <ul  >
              <li
                  onMouseEnter={() => setshowBloglist(true)}
                  onMouseLeave={() => setshowBloglist(false)}
                  style={{ position: 'relative' }}
              >
                  <a id='artft' href='/'><span>Blog<FaAngleDown /></span></a>
                  {showBloglist && (
                      <div className="oieruet" >
                          <ul>
                              <li className='pb-1 pt-3'><a id='artfttg' href='#'>Blog Category Grid</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Blog Category List</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Blog Category Big</a></li>
                              <li className='pb-1 pt-1'><a id='artfttg' href='#'>Blog Category Wide</a></li>
                              <li className='pb-3 pt-1'><a id='artfttg' href='#'>Single Post</a></li>
                          </ul>
                      </div>
                  )}
              </li>
          </ul>
      </div>
  )
}

export default Blogpg
