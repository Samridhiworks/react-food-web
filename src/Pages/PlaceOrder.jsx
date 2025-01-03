import React from "react";
import '../Components/App.css';

const PlaceOrder = ()=>{
    return(
        <>
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Street"></input>
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input  type='text' placeholder='Phone' />
                    
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>$50</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery FEE</p>
                            <p>$2</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <p>$52</p>
                        </div>
                        <button>PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default PlaceOrder