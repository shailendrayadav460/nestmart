import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import Button from 'react-bootstrap/Button'


function MegaMenupg() {
    const [showMegaMenulist, setshowMegaMenulist] =useState(false)
  return (
      <div>
          <ul onMouseLeave={() => setshowMegaMenulist(false)} >
              <li
                  onMouseEnter={() => setshowMegaMenulist(true)}
                  
              >
                  <a id='artft' href='/'><span>Mega Menu <FaAngleDown /></span></a>
              </li>
          </ul>
          {showMegaMenulist && (
                      <div className="irfdnkdfd container bg-white" >
                              <div className="d-flex container bg-white">
                                  <div cla>
                                      <li className='pb-1 pt-3'><h5 href='#'>Fruit & Vegetables</h5></li>
                                      <li className='pb-1 pt-3'><a id='artfttg' href='#'>Meat & Poultry</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Fresh Vegetables</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Herbs & Seasonings</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Cuts & Sprouts</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Exotic Fruits & Veggies</a></li>
                                      <li className='pb-3 pt-1'><a id='artfttg' href='#'>Packaged Produce</a></li>
                                  </div>
                                  <div>
                                      <li className='pb-1 pt-3'><h5 href='#'>Breakfast & Dairy</h5></li>
                                      <li className='pb-1 pt-3'><a id='artfttg' href='#'>Milk & Flavoured Milk</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Butter and Margarine</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Eggs Substitutes</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Marmalades</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Sour Cream</a></li>
                                      <li className='pb-3 pt-1'><a id='artfttg' href='#'>Cheese</a></li>
                                  </div>
                                  <div>
                                      <li className='pb-1 pt-3'><h5 href='#'>Meet and Seafood</h5></li>
                                      <li className='pb-1 pt-3'><a id='artfttg' href='#'>Breakfast Sausage</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Dinner Sausage</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Chicken</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Sliced Deli Meat</a></li>
                                      <li className='pb-1 pt-1'><a id='artfttg' href='#'>Wild Caught Fillets</a></li>
                                      <li className='pb-3 pt-1'><a id='artfttg' href='#'>Crab and Shellfish</a></li>
                                  </div>
                                  <div>
                                      <div className="hiejdflkdsfdflkj">
                                          <p>Hot Deals</p>
                                          <h4>Don't miss Tranding<br /><span className="text-warning	">Save to 50%</span></h4>
                                          <Button className="mt-2" variant="success">Shop Now</Button>
                                      </div>
                                      <img className="hiejdflkdsfdf"  src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png" />
                                  </div>
                              </div>
                      </div>
                  )}
      </div>
       
  )
}

export default MegaMenupg
