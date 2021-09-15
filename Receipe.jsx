import React, {useState} from 'react'
import ReceipeListForReceipe from "./ReceipeListForReceipe";
import Receipe1ForReceipe from "./Receipe1ForReceipe";
import { Link } from "react-router-dom";


const Receipe = () => {


    const [enteredItem, setEnteredItem] = useState("");
    const inputField = (event) =>
    {
        setEnteredItem(event.target.value);
    }

    return (

        
        <div className="ReceipeMain">
        <div className="row">
            <img className="receipe_img" src="https://i.pinimg.com/originals/53/b5/d7/53b5d70023efa05ec6797b25df413b73.jpg"/>
            <h1 className="receipe_h1 text-center">Maryam's Restaurant</h1>
            <h2 className="receipe_h2 text-center" >Stay Tuned. More Receipes Are Coming.</h2>
            <input className="SearchBar1" onChange={inputField} value={enteredItem} type="text" placeholder="Search Receipe"/>       



            {
                ReceipeListForReceipe.filter((val) =>
                {
                    if(enteredItem === "")
                    {
                        return (
                            <div className="ReceipeListForReceipeFilterDivWithNoData">
                                    
                            </div>
                        )
                    }
                    else if(val.h1.toLowerCase().includes(enteredItem.toLowerCase()))
                    {
                        return val
                    }
                }).map((val, key) =>
                {
                    return (
                    <Link className="Receipe3Main" to="/receipedetails" style={{textDecoration: "none", color:"black"}}>
                        <div className="Receipe3Main">
                                <img className="Receipe_img2" src={val.img} props={val.img} />
                                <p className="Receipe3Mainp1">{val.h1}</p>
                                <p className="Receipe3Mainp2">{val.date}</p>
                        </div>
                    </Link>
                  )
                })
            }       
        </div>
        </div>
    )
}

export default Receipe
