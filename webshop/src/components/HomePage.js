
import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()


export default class Productlist extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Have a look at our" title="feed"/>

                        <div className="row">
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
