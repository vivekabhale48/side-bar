import React, { useEffect, useState } from 'react'
import './Category.css'
import { MiddleCategorySection } from '../../Routes/HomePageRoutes'

const Category = () => {

  // Api call started
  
  const [data, setdata] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/getHomePage')
    .then((response)=> response.json())
    .then((data)=>{
      setdata(data);
    })
    .catch((e)=> console.error('Api failed', e));
  }, []);

  // Api call ended

  return (
    <div className='container'>
      {
        data.map((e, i) => {
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
          return (
            <>
              <div className='subCatHeading justify-content-between'>
                <h3>{midCat.RoomsSec}</h3>
                <span>{MiddleCategorySection.shopAll}</span>
              </div>
              <div className='midSection2 align-center-between'>
                {
                  midCat.middleSubCat.map((midSubCat, i)=>{
                    return(
                      <div key={i} className="midSubCat col-sm-3">
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