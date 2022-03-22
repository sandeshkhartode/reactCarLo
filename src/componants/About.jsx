import React from 'react'
// import appstore from './Svg/appstore.svg'
import { FaMedal, FaCarSide } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import './About.css'

export default function About() {
  return (
    <>
      <div className="backgroundimg">

      </div>
      <div className='container'>
        <div className="banner">
        <div className="row">
          <div className="col-md-3 column">
            <span className='logo'><FaMedal /></span>
            <div className="">
              <div className="title"><strong>India’s #1</strong></div>
              <p>Largest Auto portal</p>
            </div>
          </div>
          <div className="col-md-3 column">
            <span className='logo'><FaCarSide /></span>
            <div className="">
              <div className="title"><strong>Car Sold</strong></div>
              <p>Every 4 minute</p>
            </div>
          </div>
          <div className="col-md-3 column">
            <span className='logo'><MdLocalOffer /></span>
            <div className="">
              <div className="title"><strong>Offers</strong></div>
              <p>Stay updated pay less</p>
            </div>
          </div>
          <div className="col-md-3 column">
            <span className='logo'><GrServices /></span>
            <div className="">
              <div className="title"><strong>Best Service</strong></div>
              <p>24*7 Service Available</p>
            </div>
          </div>
        </div>
        </div>  
        <div className="">
          <div><p>About CarLo CarLo.com is India's leading car search venture that helps users buy cars that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India. The company has tie-ups with many auto manufacturers, more than 4000 car dealers and numerous financial institutions to facilitate the purchase of vehicles.</p>
            <p>CarLo.com has launched many innovative features to ensure that users get an immersive experience of the car model before visiting a dealer showroom. These include a Feel The Car tool that gives 360-degree interior/exterior views with sounds of the car and explanations of features with videos; search and comparison by make, model, price, features; and live offers and promotions in all cities. The platform also has used car classifieds wherein users can upload their cars for sale, and find used cars for buying from individuals and used car dealers.</p>
            <p>Besides the above consumer product features, CarLo.com provides a rich array of tech-enabled tools to OE manufacturers and car dealers. These include apps for dealer sales executives to manage leads, cloud services for tracking sales performance, call tracker solution, digital marketing support, virtual online showroom and outsourced lead management operational process for taking consumers from enquiry to sale.</p>
            <p>Our vision is to construct a complete ecosystem for consumers and car manufacturers, dealers and related businesses such that consumers have easy and complete access to not only buying and selling cars, but also manage their entire ownership experience, be it accessories, tyres, batteries, insurance or roadside assistance.</p>
            <p>To diversify our product offerings we have ventured into car insurance business through InsuranceLo.Com</p>
            <h4>Investors and shareholdersh</h4>
            <p>CarLo.com, which went live in 2021, was set up by a bunch of young, enthusiastic IIT graduates. Its investors include Google Capital, Tybourne Capital, Hillhouse Capital, Sequoia Capital, HDFC Bank, Ratan Tata and Times Internet.</p></div>
        </div>
      </div>
    </>
  )
}

