import React from 'react'
import './Contact.css'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <>
      <div className="container contact-main">
        <h3>Contact Us</h3>
        <div className="contactus">
          <div className="row contactrow">
            <div className="col-sm-5">
              <div className="callicon">
                <span className='span1'><FiPhoneCall /></span><span className='span2'> CALL US</span>
                <div className='div1'>7620203884</div>
                <span className='span3'>(Mon to Sat 9:30 AM to 6 PM)</span>
              </div>
              <div className="email">
                <div className="emailicon">
                  <span className='span1'><HiOutlineMail /></span><span className='span2'> E-MAIL</span>
                  <div className='div1'>support@carlo.com</div>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="mainform">
              <form className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="validationDefault01" className="form-label">First name</label>
                  <input type="text" className="form-control" id="validationDefault01"  required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="validationDefault02" required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefaultUsername" className="form-label">Email Id</label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationDefault03" className="form-label">City</label>
                  <input type="text" className="form-control" id="validationDefault03" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">State</label>
                  <select className="form-select" id="validationDefault04" required>
                    <option  disabled value="">Choose State</option>
                    <option>Maharastra</option>
                    <option>Gujrat</option>
                    <option>Delhi</option>
                    <option>Punjab</option>
                    <option>MP</option>
                    <option>UP</option>
                    <option>Telengana</option>
                    <option>Karnatak</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationDefault05" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="validationDefault05" required />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
