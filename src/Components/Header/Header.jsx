import React, { useEffect, useState } from 'react'
import "./Header.css"
const Header = () => {
    const [categores,setCategoris] = useState ([])
    const getCity = () =>{
        axios({
            url:'https://autoapi.dezinfeksiyatashkent.uz/api/categores',
            method:'GET',
        }).then(data=>setCategoris(data?.data?.data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
        getCity()
    },[])
  return (
    <div>
      {
        
      }
    </div>
  )
}
import "./Header.css"
import axios from 'axios'
export default Header
