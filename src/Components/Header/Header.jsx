import React, { useEffect, useState } from 'react'
import "./Header.css"
const Header = () => {
    const [categories,setCategories] = useState ([])
    const imgurl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/"
    const getCity = () =>{
        axios({
            url:'https://autoapi.dezinfeksiyatashkent.uz/api/categories',
            method:'GET',

        })

        .then(data=>setCategories(data?.data?.data))
        .catch(err=>console.log(err))

    }

    useEffect(()=>{
        getCity()

    },[])

  return (

    <div className='header'>
        <div className='container header-container'>
        {
           categories && categories.map((item,index)=>(
            <div>
                <img className='header-img' src={`${imgurl}${item.image_src}`} alt="" />
                <h2 className='header-title'>{item.name_en}</h2>
                <h3 className='header-title'>{item.name_ru}</h3>
            </div>
        ))
      }
        </div>
    </div>
    
  )
}
import "./Header.css"
import axios from 'axios'
export default Header
