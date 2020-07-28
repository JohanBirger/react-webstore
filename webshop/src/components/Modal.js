import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Button} from'./Button';
import {Link} from "react-router-dom";
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal} = value;
                    const {img, title, price} =value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5 className="text-muted">item added to cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: {price} SEK
                                        </h5>
                                        <Link to ='/products'>
                                            <Button onClick={()=>closeModal()}>
                                                continue shopping
                                            </Button>
                                        </Link>
                                        <Link to ='/cart'>
                                            <Button onClick={()=>closeModal()}>
                                                go to cart
                                            </Button>
                                        </Link>
                                        
                                        


                                    </div>

                                </div>

                            </div>

                        </ModalContainer>
                        );

                    }
                    
                }}
            </ProductConsumer>
        );
    }
}


const ModalContainer =styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items: center;
justify-content:center;
#modal{
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    padding: 3rem;
    background: var(--mainWhite);
}


`;
