import React from 'react'
import { useSelector } from 'react-redux'
import { FaRupeeSign } from "react-icons/fa";
import './Checkout.css'

export default function Checkout() {
    const state = useSelector(state => state.addItem)
    let total = 0;
    const itemList = (item) => {
        total = total + item.avg_price

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const img1 = {
            width: '275px',
            height: '200px'
        }

        return (
            <>
                <div class="card mx-3 my-5" style={{ width: "20rem", padding: "0px", border: '2px' }}>
                    <img src={item.img_url} className="card-img-top" alt={item.title} style={img1} />
                        <div className="text-center style">
                            <h3 class="card-title">{capitalizeFirstLetter(item.title)}</h3>
                        </div>
                        {/* <span className='style'> Price : {item.avg_price} Lakh</span> */}
                </div>

            </>
        );
    }

    const productName = (name) => {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return (
            <>
                <div className="row">
                    <div className="col-sm-6 style">
                        <h5>{capitalizeFirstLetter(name.title)}</h5>
                    </div>
                    <div className="col-sm-6 style">
                        <h5><FaRupeeSign />{(name.avg_price)} Lakh</h5>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div class="container my-5">
                <div class="row">
                    {state.map(itemList)}
                </div>
                {state.map(productName)}
                <hr />
                <div className="row">
                    <div className="col-sm-6" id='totalcol1'>
                        <h5>Total Amount :</h5>
                    </div>
                    <div className="col-sm-6 totalcol2">
                        <h5><FaRupeeSign /><span>{(total).toFixed(2)} Lakh</span></h5>
                    </div>
                </div>
                <div className='text-center payment'>
                    <div className="btn btn-success">Payment</div>
                </div>
            </div>
        </>
    )
}   


