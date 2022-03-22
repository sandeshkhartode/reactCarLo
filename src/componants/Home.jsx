import React from 'react'
import Carousel from './Carousel'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import './Home.css'


export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="heading">
          <h1>The Whole New World Of Cars</h1>
          <span className='dash'></span>
        </div>
        <Products />
      </div>
      <About/>
      <Contact/>
    </>
  )
}
