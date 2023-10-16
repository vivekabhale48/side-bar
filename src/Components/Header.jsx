import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const [dropdown, setdropdown] = useState(false);
    const [partner, setpartner] = useState(false);

  return (
    <header>
        <div className='header-1'>
            <ul className='element-list'>
                <li><a href="">About us</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Support/FAQ</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
        <div className='header-2'>
            <img src="assets/Acima.svg" alt="Acima Logo" />
            <div className='element-list-2'>
                <div>
                    <a href="">How it Works</a>
                </div>
                {/* Ways to Shop section Started */}
                <div className='dropdown-main'>
                    <div className={`dropdown-title ${dropdown ? 'active' : ''}`} onClick={()=> {setdropdown(!dropdown)}}>
                        <a>Ways to Shop</a>
                        <img src="assets/Shoponline.svg" alt="Arrow-down" />
                    </div>
                    {
                        dropdown ? 
                        <div className='dropdown-elements'>
                            <a href="">Overview</a>
                            <a href="">Shop Nearby Stores</a>
                            <a href="">Shop Online Stores</a>
                            <a href="">Get the App</a>
                        </div> : ''
                    }
                </div>
                <div className='dropdown-main'>
                    <div className={`dropdown-title ${partner ? 'active' : ''}`} onClick={()=> {setpartner(!partner)}}>
                        <a>Ways to Shop</a>
                        <img src="assets/Shoponline.svg" alt="Arrow-down" />
                    </div>
                    {
                        partner && (
                            <div className='dropdown-elements'>
                                <a href="">Shop Online Stores</a>
                                <a href="">Get the App</a>
                            </div>
                        )
                    }
                </div>
            </div>
            <a href="" className='app-btn'>Get the App</a>
        </div>
    </header>
    )
}

export default Header