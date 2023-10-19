import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Header2 from '../Header2/Header2';

const Header = () => {
    const [dropdown, setdropdown] = useState(false);
    const [partner, setpartner] = useState(false);
    let ModRef = useRef();
    let ShopRef = useRef();
    
    useEffect(()=> {
        let handler = (e) => {
            if(!ShopRef.current.contains(e.target) && !ModRef.current.contains(e.target)) {
                setdropdown(false);
                setpartner(false);
            }
        };
        document.addEventListener('mousedown', handler);
    });


  return (
    <header>
        <div className='Header-Desktop'>
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
                    <div className='dropdown-main' ref={ModRef}>
                        <div className={`dropdown-title ${dropdown ? 'active' : ''}`} onClick={()=> {setdropdown(!dropdown)}}>
                            <a>Ways to Shop</a>
                            <img src="assets/Shoponline.svg" alt="Arrow-down" />
                        </div>
                        {
                            dropdown ? 
                            <div className='dropdown-elements'>
                                <a>Overview</a>
                                <a>Shop Nearby Stores</a>
                                <a>Shop Online Stores</a>
                                <a>Get the App</a>
                            </div> : ''
                        }
                    </div>
                    <div className='dropdown-main' ref={ShopRef}>
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
        </div>
        <Header2 />
    </header>
    )
}

export default Header