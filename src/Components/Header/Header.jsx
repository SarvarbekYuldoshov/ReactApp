import React, { useEffect, useState } from 'react'
import "./Header.css"
const Header = () => {
    const [categories,setCategories] = useState ([])
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

    <div>
      {
        categories && categories.map((item,index)=>(
            <div>
                <h1>{item.name}</h1>
                <h2>{item.text}</h2>
            </div>
        ))
      }
    </div>
    
  )
}
import "./Header.css"
import axios from 'axios'
export default Header
