import React from 'react'
import './MainCover.css'
const MainCover = () => {
  return (
    <div className='landing-page'>
      <div className='cover-wrap'>
        <div className='cover-img-wrapper'>
            <img className='cover-img' src="assets/ashley-cover-pic.png" alt="ashley-cover" />
        </div>
        <div className='cover-content'>
          <h1>Shop Ashley Furniture with Acima</h1>
          <h3>Get approved to lease up to $5,000 in merchandise with free delivery*</h3>
          <a href="" className='app-btn btn-1'>Get the App</a>
        </div>
      </div>

      <div className='cover-middle'>
        <div className='how-to-shop-sec'>
            <div className="howtoshop-text">
              <h1>How to Shop</h1>
            </div>
            <div className="howtoshop-content">
              <div className='shop-content'>
                <img src="assets/Group.svg" alt="img1" />
                <span>Apply to get approved to lease up to $5,000* in merchandise.</span>
              </div>
              <div className="shop-content">
                <img src="assets/Group 1.svg" alt="img2" />
                <span>Browse through Ashley products and add to your cart.</span>
              </div>
              <div className="shop-content">
                <img src="assets/Group 2.svg" alt="img3" />
                <span>Apply your approval amount and complete our easy checkout.</span>
              </div>
            </div>
            <div className="approved-text">
              <span>Already approved ? <a className='shop-now-btn'>Shop now</a></span>
            </div>
        </div>
      </div>

      <div className="lower-bottom-sect-desk">
        <img src="assets/bottom-lower-desk.svg" alt="" />
      </div>

      <div className="lower-bottom-sect-mob">
        <img src="assets/bottom-lower.svg" alt="" />
      </div>
    </div>
  )
}

export default MainCover