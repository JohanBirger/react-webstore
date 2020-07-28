import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from'styled-components';
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
                                <div className="col-10 mx-auto text center text-slanted textMainBlack my-5">
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
                                    <h4 className="textTitle text-capitalize text-muted mt-3 mb-2">
                                        made by: <span className="text-capitalize">{company}</span>
                                    </h4>
                                    <h4 className="textMainBlack"><strong>price : {price} <span>SEK </span></strong>
                                    </h4>
                                    <p className="text-capitalize.font-weight-bold.mt-3.mb-0">
                                        info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/*buttons*/}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                            
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart" : "add to cart"}

                                        </ButtonContainer>

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

const whiteButtonContainer = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border: 0.1rem solid var(--mainWhite);
color: var(--mainBlack) !important;
border-radius:0.1rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainWhite);
    color: var(--secDark) !important;
}
&:focus{
    outline:none;
}

`;