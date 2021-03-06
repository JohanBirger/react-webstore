import React from 'react'
import {Link} from "react-router-dom";
import { dom } from '@fortawesome/fontawesome-svg-core'
import PayPalButton from './PayPalButton';

dom.watch()

export default function CartTotals({value, history}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} =value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                
                        <span><br/></span>

                        <Link to = '/products'>
                            <button className="btn btn-outline-danger mb-3 px-4" 
                            type="button" onClick={()=> clearCart()}>
                                Clear cart
                            </button>
                        </Link>

                        <h5>
                            <span className="text-file"> Total : {cartSubTotal} </span> <strong>SEK</strong>
                        </h5>
                        {/* Potential foreign adaptation, change total to subtotal bellow */}
                        <h5>
                            <span className="text-file text-muted"> Discount : {cartTax} </span> <strong className="text-muted">SEK</strong>
                        </h5>
                        <h5>
                            <span className="text-file"> Total : {cartTotal} </span> <strong>SEK</strong>
                        </h5>
                        <PayPalButton
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history}>

                        </PayPalButton>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}


