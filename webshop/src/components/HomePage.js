import React from 'react'
import {Link} from 'react-router-dom';
import {Button} from './Button';
import styled from 'styled-components'
import {ProductWrapper} from './Product';
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default function HomePage() {
    return (

        const {id, title, img, price, inCart} = this.props.product

        <div>
                    <div className="container py-5">
                            {/* title */}
    <div className="row">
          <div className="col-10 mx-auto text center text-slanted textMainBlack my-5">
            <h1>
                Feed
            </h1>
        </div>
    </div>
                            {/* end title */}
                            {/* product info */}
    <div className="row">
                                

            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>( 
                        <div className="img-container p-5" 
                        onClick={()=>
                            value.handleDetail(id)
                        }>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"
                            />
                        </Link>
    
                    </div>)}
                   
                    </ProductConsumer>

                </div>
            </ProductWrapper>

       
                               
                                            
                

            
        
                                
    </div>
</div>
        </div>
    )
}
