import React from 'react'
import {Link} from "react-router-dom";
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

export default function CartTotals({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} =value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to = '/'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button" onClick={()=> clearCart()}>
                                Clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-file"> Total : {cartSubTotal} </span> <strong>SEK</strong>
                        </h5>
                        {/* For foreign adaptation, change total to subtotal and decomment bellow */}
                        {/*<h5>
                            <span className="text-file"> tax : {cartTax} </span> <strong>SEK</strong>
                        </h5>
                        <h5>
                            <span className="text-file"> Total : {cartTotal} </span> <strong>SEK</strong>
                        </h5>*/}

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
