
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-6 my-1">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>( 
                        <div className="img-container col-12" 
                        onClick={()=>
                            value.handleDetail(id)
                        }>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top col-12"
                            />
                        </Link>
                      
                    </div>)}
                   
                    </ProductConsumer>

     
                </div>
            </ProductWrapper>
        )
    }
}


Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}


export const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s exponential;
    border-radius:0rem 0rem 0rem 0rem;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition:all 0.4s linear;
}
&:hover{
.card{
    border:0,05rem solid  rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
 }
  .card-footer{
    background: var(--mainWhite);
 }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 0.4s linear;
}
img-container:hover .card-img-top{
    transform: scale(1);
}
.cart-btn {
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition: all 0.2s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover {
    color: var(--snowWhite);
    cursor: pointer;
}
`
