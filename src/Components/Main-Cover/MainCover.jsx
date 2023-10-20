import React from 'react'
import './MainCover.css'
const MainCover = () => {
  return (
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
  )
}

export default MainCover