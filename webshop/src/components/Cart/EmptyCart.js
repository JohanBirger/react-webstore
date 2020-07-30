import React from 'react'
import { dom } from '@fortawesome/fontawesome-svg-core'
import {Link} from 'react-router-dom'
import styled from'styled-components';

dom.watch()

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mx-auto text-center textTitle">
                    <h1>Your cart is currently empty</h1>
                    <Link to ='/products'>
                    <Button>
                        Head back to products
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Button = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border: 0.1rem solid transparent;
color: ${props => props.theme.main};
color:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.35s ease-in-out;
&:hover{
    background:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
    color: var(--mainWhite);
    border: 0.1rem solid var(--mainBlack);
    border-color:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
    border-radius:0.1rem;
}
&:focus{
    outline:none;
}


`