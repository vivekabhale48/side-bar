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
                <h3>{midCat.RoomsSec}</h3>
                <span>{MiddleCategorySection.shopAll}</span>
              </div>
              <div className='midSection2 align-center-between'>
                {
                  midCat.middleSubCat.map((midSubCat)=>{
                    return(
                      <div className="midSubCat col-sm-3">
                        <div className='midSubCatPhotos d-flex-center'> 
                          <img src={midSubCat.middleSubCatImg} alt="" />
                        </div>
                        <div className='midSubCatName'>
                          <span>{midSubCat.middleSubCatName}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </>
          )

        })
      }
    </div>
  )
}

export default Category