import React from 'react'
import './Category.css'
import HomePageRoute from '../../Routes/HomePageRoutes'

const Category = () => {
  return (
    <div className='container'>
      {
        HomePageRoute.map((e,i)=>{
          console.log(e)
          return (
            <div key={i}>
              <h1>{e.categoryName}</h1>
              {
                e.subCategory.map((subCat)=> {
                  console.log(subCat);
                  return (
                    <div>
                      <img src={subCat.subCatImg} alt="" />
                    </div>
                  )
                })
              }
            </div>
            
          )
        })
      }
    </div>
  )
}

export default Category