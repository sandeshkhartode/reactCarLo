import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../redux/actions';
import { NavLink } from 'react-router-dom';
import './Cart.css';
import { FaRupeeSign } from "react-icons/fa";

export default function Cart(item) {
  const state = useSelector(state => state.addItem)
  const dispatch = useDispatch();

  const handleClose = (car)=>{
    dispatch(delItem(car))
  }

  const cartItems = (cartItem) => {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    return (
      <>
        <div class="card mx-3 mt-3" style={{ width: "19rem", padding: "0px",border:'2px' }}>
          <img src={cartItem.img_url} className="card-img-top cartimg" alt={cartItem.name}/>
          <div class="card-body" id='cardbody'>
            <h2 class="card-title carname text-center">{capitalizeFirstLetter(cartItem.title)}</h2>
            <p class="card-text">
              <div className="row">
                <div className="col-sm-5 info">
                 <strong>Engine : </strong><br />{cartItem.engine}
                </div>
                <div className="col-sm-7 info">
                <strong>Mileage : </strong> <br />{cartItem.Mileage}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 info">
                <strong>Seat : </strong> <br />{cartItem.seat}
                </div>
                <div className="col-sm-7 info">
                <strong>Fuel Type : <br /> </strong>{cartItem.Fuel}
                </div>
              </div>
            </p>
          </div>
          <span className=''><strong>Price : <span><FaRupeeSign/></span> {cartItem.avg_price} Lakh</strong></span>
          <button className='mt-3 mx-3 btn-danger' style={{borderRadius:"8px"}} onClick={() => handleClose(cartItem)}>Remove Item</button>
        </div>
      </>
    );
  }

  const button = () => {
    return (
      <NavLink className="btn btn-success my-4" to="/checkout">Proceed To Checkout</NavLink>
    )
  }

  return (
    <>
    <div className="container" id='cart'>
      <div className="maincart">
      <div className="row">
        {state.map(cartItems)}
      {state.length !== 0 && button()}
        </div>
      </div>
      </div>
    </>
  )
}
