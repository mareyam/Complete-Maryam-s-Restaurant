import React,{useState} from 'react'
import {Link} from "react-router-dom";
import receipeList from "./receipeList";
import HomeMainDetails from "./HomeMainDetails";
import HomeFooterDetails from "./HomeFooterDetails";


const Landingpage = () => {            //Landing Page
    return (
        <div className="homeMain">
        <div className="row">
        <img className="home_img" src="https://i.pinimg.com/originals/53/b5/d7/53b5d70023efa05ec6797b25df413b73.jpg"/>
        <h1 className="home_h1 text-center">Maryam's Restaurant</h1>
        <Link style={{ color: 'white', textDecoration: 'inherit' , textAlign:'center'}} to="/receipe" className="home_button">View Menu</Link>
        <h2 className="home_h2" >Binging with Babish is a cooking show dedicated to discovering what the delectable (and occasionally horrible) foods from fiction actually taste like.</h2>



       {
          receipeList.map((curElem) =>
          {
              return (
                <Link className="Receipe3Main" to="/faq" style={{textDecoration: "none", color:"black"}}>
                  <div className="home2Main">
                  
                        <img className="home_img2" src={curElem.img} />
                        <p className="home2Mainp1">{curElem.h1}</p>
                        <p className="home2Mainp2">{curElem.date}</p>
                  </div>
                </Link>
              )
          })
       }
       </div>

       <HomeMainDetails/>
      <HomeFooterDetails/>          

          
    


          

        </div>
    )
}
export default Landingpage;

