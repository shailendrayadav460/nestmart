import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

function Shop() {
    const [showShopPopup, setshowShopPopup] = useState(false)
    return (
        <div>
            <ul  >
                <li
                    onMouseEnter={() => setshowShopPopup(true)}
                    onMouseLeave={() => setshowShopPopup(false)}
                    style={{ position: 'relative' }}
                >
                    <a id='artft' href='/'><span>Shop <FaAngleDown /></span></a>
                    {showShopPopup && (
                        <div className="oieruetsd" >
                            <ul>
                                <li className='pb-1 pt-3'><a id='artfttg' href='#'>Shop Grid – Right Sidebar</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop Grid – Left Sidebar</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop List – Right Sidebar</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop List – Left Sidebar</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop – Wide</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Single Product</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop – Filter</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop – Wishlist</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop – Cart</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop – Checkout</a></li>
                                <li className='pb-1 pt-1'><a id='artfttg' href='#'>Shop – Compare</a></li>
                                <li className='pb-3 pt-1'><a id='artfttg' href='#'>Shop Invoice</a></li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default Shop
