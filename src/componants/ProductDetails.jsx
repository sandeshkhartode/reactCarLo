import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Data from './Data'
import './Pd.css'
import { addItem, delItem } from "../redux/actions/index"
import { MdEventSeat } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosSpeedometer } from "react-icons/io";
import { GiChemicalTank } from "react-icons/gi";
import { ImPower } from "react-icons/im";

export default function ProductDetails() {
  const dispatch = useDispatch()
  const carid = useParams()
  const carDetail = Data.filter((x) => x.id == carid.id)
  const car = carDetail[0]

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [addcart, setAddcart] = useState("Add To Cart")
  const handlecart = (car) => {
    if (addcart === "Add To Cart") {
      dispatch(addItem(car))
      setAddcart("Remove From Cart ")
    }
    else {
      dispatch(delItem(car))
      setAddcart("Add To Cart")
    }
  }

  return (
    <>
      <div className="container">
        <div className="mainrowone">
          <div className="row">
            <div className="col-sm-6">
              <div className="">
                <img src={car.img_url} className='carimg' alt={car.name} />
                <h1 className='text-center carname mt-3'>{capitalizeFirstLetter(car.title)}</h1>
              </div>
              <div className="addtocart">
                <button className="btn btn-warning" onClick={() => { handlecart(car) }}>{addcart}</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="">
                <div className="carinfo">
                  <h2><span>{capitalizeFirstLetter(car.name)}</span> Key Specifications</h2>
                  <table>
                    <tr>
                      <td>
                        Engine (upto)
                        <div className="">
                          <h4> <FaCogs /></h4>
                          <strong>{car.engine}</strong>
                        </div>
                      </td>
                      <td>
                        Mileage
                        <div className="">
                          <h4>  <IoIosSpeedometer /> </h4>
                          <strong>{car.Mileage}</strong>
                        </div>
                      </td>
                      <td>
                        Fuel Type
                        <div className="">
                          <h4>  <GiChemicalTank /> </h4>
                          <strong>{car.Fuel}</strong>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Seats Capacity
                        <div className="">
                          <h4> <MdEventSeat /></h4>
                          <strong>{car.seat}</strong>
                        </div>
                      </td>
                      <td>
                        Horsepower
                        <div className="">
                          <h4><ImPower /></h4>
                          <strong>{car.avg_horsepower} </strong>
                        </div>
                      </td>
                      <td>
                        Rating <br />
                        <strong style={{ color: 'red' }}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></strong>
                      </td>
                    </tr>
                  </table>
                  <div className="description">
                    <h3>Product Description</h3>
                    <p>{car.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
      </div>
    </>
  )
}
