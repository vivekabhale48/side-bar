import React from 'react'
import './Category.css'
import HomePageRoute from '../../Routes/HomePageRoutes'

const Category = () => {
  return (
    <div className='container'>
      {
        HomePageRoute.map((e,i)=>{
          return (
            <div key={i}>
              <h1 className='mainCatName'>Shop by {e.categoryName}</h1>
              <div className='subCatSection'>
                {
                  e.subCategory.map((subCat, index)=> {
                    return (
                      <>
                        <div key={index} className='subCatImg'>
                          <img src={subCat.subCatImg} alt="" />
                          <div className='subCatName'>
                            <a href="">{subCat.subCatName}</a>
                          </div>
                        </div>
                      </>
                      
                    )
                  })
                }
              </div>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default Category