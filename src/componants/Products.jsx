import React from 'react'
import { NavLink } from 'react-router-dom'
import data from './Data'
import './Products.css'
import { FaRupeeSign } from "react-icons/fa";
export default function Products() {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const car = (item) => {
      
        return <>
            <div className="card mx-2" key={item.id}  style={{ width: "16rem",border:'2px' }}>
                <img src={item.img_url} className="card-img-top img1" alt={item.img_url} style={{borderRadius:"15px"}} />
                <div className="card-body">
                    <h2 className="card-title text-center carname">{capitalizeFirstLetter(item.name)}</h2>
                    <p className="card-text pt-0 my-0"> <strong style={{fontSize: "15px"}}><FaRupeeSign/></strong><strong>{item.price} </strong><small style={{ color: "#aaa" }}>onwards</small> </p>
                    <p className='pt-0'><small>Avg. Ex-Showroom price</small></p>
                    <NavLink to={`/product/${item.id}/${item.name}`} className="btn btn-danger">View Details</NavLink>
                </div>   
            </div>
        </> 
    }
    return (<>  
        <div className='container'>
        {/* <div className="heading">
          <h1>Buy The Perfect Car For You</h1>
          <span className='dash'></span>
        </div> */}
            <div className="row mainrow ">  
                {data.map(car)}
            </div>
        </div>
    </> 
    )
}