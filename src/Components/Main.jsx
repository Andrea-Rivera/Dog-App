import React, { useState } from 'react'
import "../Components/styles.css"

function Main() {
    const [imgUrl, setUrl]= useState("https://cdn2.thedogapi.com/images/wRJ9Dwspw.jpg");
   const callImage = () =>{
    fetch("https://api.thedogapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setUrl(data[0].url))
   }
  return (
    <>
        <div className="container">
            <div className="box">
                <h2>Enjoy the Doggy!</h2><br/>
                <img src={imgUrl} alt="dog"/><br/>
                <button onClick={()=>callImage()}>Click Me</button>
            </div>
        </div>
    </>
  )
}

export default Main