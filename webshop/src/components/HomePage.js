
import React, { Component } from 'react';
import Product from './Feed';
import Title from './Title';
import {ProductConsumer} from '../context';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()


export default class Productlist extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="bgBlack">
                    <div className="container bgBlack col-12">
                     {/*  <div className="col-10 mx-auto my-2 text-center textTitle">
                                   <h1 className="text-capitalize font-weight-bold textSnow">
                    The <strong className="textSnow">latest!
                    </strong>
                </h1>
                        </div> */}

                        <div className="row bgBlack col-12">
                            <ProductConsumer>
                                {value =>{
                                    return value.products.map(product=>{
                                        return <Product key={product.id} product={product}  />
                                    })

                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
               // 
            
        )
    }
}
