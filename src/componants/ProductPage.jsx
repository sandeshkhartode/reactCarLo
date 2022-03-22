import React from 'react'
import Products from './Products'
import './ProductPage.css'

export default function ProductPage() {
  return (
    <div>
         <div className="ppheading">
          <h1>Buy The Perfect Car For You</h1>   
          <span className='ppdash'></span>
        </div>
        <Products/>
    </div>
  )
}
