import React from 'react'

function Trackyourordes() {
  return (
      <div className='adfgoed'>
          <div >
              <h3>Orders tracking</h3>
              <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
          </div>
          <div>
              <div>
                  <p id='ffllfjl'>Order ID</p>
                  <input id='trerertr' type='text' placeholder='Found in your order confirmation email'></input>
              </div>
              <div>
                  <p id='ffllfjl'>Billing email</p>
                  <input id='trerertr' type='emial' placeholder='Email you used during checkout'></input>
              </div>
              <div>
                <button id='trerertrjhgh'>Track</button>
              </div>
          </div>
      </div>
  )
}

export default Trackyourordes
