import React from 'react'
import './Category.css'
import { HomePageRoute, MiddleCategorySection } from '../../Routes/HomePageRoutes'

const Category = () => {
  return (
    <div className='container'>
      {
        HomePageRoute.map((e, i) => {
          return (
            <div key={i}>
              <h1 className='mainCatName'>Shop by {e.categoryName}</h1>
              <div className='subCatSection'>
                {
                  e.subCategory.map((subCat, index) => {
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
      <h1 className='mainCatName'>Shop by {MiddleCategorySection.middlecategoryName}</h1>
      {
        MiddleCategorySection.optionSubCategory.map((midCat) => {
          console.log(midCat)
          return (
            <>
              <div className='subCatHeading justify-content-between'>
                <h3>{midCat.LivingRoomsSec}</h3>
                <span>{MiddleCategorySection.shopAll}</span>
              </div>
            </>
          )

        })
      }
    </div>
  )
}

export default Category