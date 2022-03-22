import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";
import './Cartbtn.css'

export default function Cartbtn() {
  const state = useSelector(state =>state.addItem)
  return (
    <>
        {/* <NavLink to="/cart" className='btn btn-warning mx-2'>Cart<i class="fa fa-shopping-cart"></i></NavLink> */}
        <div className="cart">
        <NavLink to="/cart" className='mx-2' id='carta'><span className='' id='carticon'><BsFillCartFill className=''/></span><span id='length'>({state.length})</span></NavLink>
        </div>
    </>
  )
}


