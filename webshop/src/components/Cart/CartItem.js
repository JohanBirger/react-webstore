import React from 'react'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

export default function CartItem({item,value}) {
    const {id, title, img, price, total, count} =item;
    const {increment,decrement, removeItem} =value
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                src={img}
                style= {{width:"5rem", height: "5rem"}}
                className="img-fluid"
                alt ="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-0.5" onClick={()=>decrement(id)}><i class="fa fa-minus"></i></span>
                        <span className="btn  mx-0.5">{count}</span>
                        <span className="btn btn-black mx-0.5" onClick={()=>increment(id)}><i class="fa fa-plus"></i></span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=> removeItem(id)}>
                🗑️
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : {total} SEK </strong>
            </div>
        </div>
    )
}
