
import React, { Component } from 'react';
import Product from './Feed';
import Title from './Title';
import {ProductConsumer} from '../context';
import { dom } from '@fortawesome/fontawesome-svg-core'
import {feedItems, exampleFeedItem} from '../feedData';

dom.watch()


export default class Productlist extends Component {
    state ={
        feed: feedItems
    };
    
    render() {
        console.log("");
        return (
            <React.Fragment>
                <div className="bgBlack">
                    <div className=" container-fluid bgBlack">
                        <div className="row bgBlack">
                            <p className="textWhite"> bajs</p>
                            

                        </div>
                    </div>
                    <div className="container-fluid bgBlack">
                     {/*  <div className="col-10 mx-auto my-2 text-center textTitle">
                                   <h1 className="text-capitalize font-weight-bold textSnow">
                                        The <strong className="textSnow">latest!
                                        </strong>
                                    </h1>
                          </div> */}

                        <div className="row bgBlack">
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
            
                
            
        )
    }
}
