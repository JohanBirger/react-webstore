import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
import {Button} from './Button';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart}=
                    value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-12 mx-auto  text-slanted textMainBlack my-5">
                                    <h1>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                {/* Product img*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* Product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> model : {title} </h2>
                                    <h5 className="textTitle text-capitalize text-muted mt-3 mb-1">
                                        made by: <span className="text-capitalize">{company}</span>
                                    </h5>
                                    <h4 className="textMainBlack"><strong>price : {price} <span>SEK </span></strong>
                                    </h4>
                                    <p className="text-capitalize.font-weight-bold.mt-3.mb-0">
                                        info about product:
                                    </p>
                                    <p className="text-muted">{info}</p>
                                    {/*buttons*/}
                                    <div>
                                        <Link to='/products'>
                                            <Button>
                                                back to products
                                            </Button>
                                            
                                        </Link>
                                        <Button cart disabled={inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "in Cart" : "add to cart"}

                                        </Button>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}


