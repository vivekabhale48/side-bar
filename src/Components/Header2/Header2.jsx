import React, { useState } from 'react'
import './Header2.css'

const Header2 = () => {
  const [openHeader, setHeader] = useState(false);
  const [openShop, setShop] = useState(false);
  const [openPartner, setPartner] = useState(false);
  const [login, setlogin] = useState(false);

  if(openHeader) {
    document.body.style.overflowY = "hidden";
  }
  else {
    document.body.style.overflowY = "auto";
  }

  return (
    <div className='Header-Mobile'>
      <div className="content-header">
        <img src="assets/bars-3-horizontal.svg" alt="horizontal-bar" onClick={() => setHeader(!openHeader)} />
        <img src="assets/Acima.svg" alt="acima-logo" />
        <img src="assets/user.svg" alt="user-img" />
      </div>

      <div className={`side-header ${openHeader ? 'active-mobile-header' : ''}`}>
        <div className='mob-header-content-1'>
          <img className='mobile-header-logo' src="assets/Acima.svg" alt="acima-logo" />
        </div>
        <div className="mob-header-content-2">
          <div>
            How It Works
          </div>
          <div>
            <div className={`way-shop-head ${openShop ? 'open' : 'hide'}`} onClick={() => setShop(!openShop)}>
              Ways To Shop
              <img src="assets/Chevron-Down.svg" alt="arrow-down" />
            </div>
            <div className={`wayshop-inside-content ${openShop ? 'open' : 'hide'}`}>
              <span>Overview</span>
              <span>Shop NearBy Stores</span>
              <span>Shop Online Stores</span>
              <span>Get the App</span>
            </div>
          </div>
          {/* Partner Started  */}

          <div>
            <div className={`partner-head ${openPartner ? 'open' : 'hide'}`} onClick={()=> setPartner(!openPartner)}>
              Partners
              <img src="assets/Chevron-Down.svg" alt="arrow-down" />
            </div>
            <div className={`partners-content ${openPartner ? 'open' : 'hide'}`}>
              <span>Shop Online Stores</span>
              <span>Get the App</span>
            </div>  
          </div>
        </div>
        <div className='mob-header-content-3'>
          <span>About Us</span>
          <span>News</span>
          <span>Support/FAQ</span>
        </div>

        <div className='mob-header-content-2'>
          <div>
            <div className={`partner-head ${login ? 'open' : 'hide'}`} onClick={()=> setlogin(!login)}>
              Login
              <img src="assets/Chevron-Down.svg" alt="arrow-down" />
            </div>
            <div className={`partners-content ${login ? 'open' : 'hide'}`}>
              <span>Customer Login</span>
              <span>Partner Login</span>
            </div>  
          </div>
        </div>

        <div className="mob-header-content-4">
          <a href="" className='app-btn'>Get the App</a>
        </div>
        
      </div>
    </div>
  )
}

export default Header2;