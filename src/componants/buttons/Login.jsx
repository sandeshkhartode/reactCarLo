import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import './Login.css'
export default function Login() {
  return (
    <>
      <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <FaUserAlt/> Login 
      </button>

      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog mdlwidth" >
          <div className="modal-content">  
            <div className="modal-header d-flex">
              <h5 className="modal-title" id="exampleModalLabel">Login to CarWale<br /><p className='loginnote'>This is necessary to personalise results for you</p></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <input type="number" className='mobiletext' placeholder='Enter Mobile Number'/><br />
             <div className="btn btn-secondary otpbtn">Get OTP</div> 
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

