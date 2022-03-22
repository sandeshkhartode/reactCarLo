import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 pt-3 connect">
              <div className="">
                <h5 style={{fontFamily: "auto",paddingRight:"20px"}}>Connect with us</h5>
              </div>
              <div className="id">
                <NavLink to=""><BsWhatsapp /></NavLink>
                <NavLink to="#"><BsInstagram /></NavLink>
                <NavLink to="#"><BsLinkedin /></NavLink>
                <NavLink to="#"><BsFacebook /></NavLink>
              </div>
            </div>   
            <div className="col-sm-8">
              <footer className="footerdiv">
                <p>
                  <AiOutlineCopyrightCircle /> 2001 - 2022. www.carlo.com . All rights reserved.
                </p>
                <p> Disclamer | Terms and condition | Cancellation / Refund Policy</p>
                <p> Make a Payment</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
