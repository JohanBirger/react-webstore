
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
        
        return (
            <React.Fragment>
                <div className="bgBlack">
                    <div className=" container bgBlack">
                        <div className="row bgBlack text-center">
                            <h1 className=" mx-auto my-2 text-center text-capitalize font-weight-bold homePageTitle textWhite">Maintenance🔥</h1>
                            

                        </div>
                    </div>
                    <div className="container-fluid bgBlack">
                     {/*  <div className="col-10 mx-auto my-2 text-center textTitle">
                                   <h1 className="text-capitalize font-weight-bold textSnow">
                                        The <strong className="textSnow">latest!
                                        </strong>
                                    </h1>
                          </div> */}

                        <div className="row bgBlack no-gutters">
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
