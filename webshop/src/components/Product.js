import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'
import { dom } from '@fortawesome/fontawesome-svg-core'
import BottomBar from './BottomBar'

dom.watch()


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
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
                        <button className="cart-btn" 
                        disabled={inCart ? true : false}
                        onClick={()=>{
                            value.addToCart(id);
                            value.openModal(id);
                        }}
                        >
                        {inCart ? (<h6 className="text-capitalize mb-0" disabled><small> in cart </small>
                            </h6>):(<h5 className="mt-1"><i class="fa fa-shopping-cart" aria-hidden="true"></i></h5>)}
                            </button>
                    </div>)}
                   
                    </ProductConsumer>

                    {/*card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="textMainBlack align-self-center mb-0 px-2">
                            {title}
                        </p>
                        <h5 className="textMainBlack font-bold mb-0">
                            <span className="mr-1">{price}</span>
                            SEK
                        </h5>

                    </div>
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
    background: transparent;

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
    background:var(--appleBlue);
    color: var(--snowWhite);
    font-size:1.2rem;
    border-color:transparent;
    border-radius: 0.5rem 0.1rem 0.1rem 0.5rem;
    transform:translate(0,0);
    transition: all 0.15s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover {
    color: var(--appleBlue);
    background: transparent; 
    cursor: pointer;
}
`
