import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import code from '../code.svg'
import styled from 'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               
                <Link to='/'>
                    <img src={code} style={{ height: 40, width:50}} alt="store" className="navbar-brand"/>

                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/products" className="nav-link">
                        Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto ">
                    <Button>
                        <span className="mr-1">
                        <i className="fa fa-shopping-cart" />
                        </span>
                        
                        Cart

                    </Button>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color:var(--snowWhite) !important;
    font-size:1rem;
    text-transform: Capitalize;
}
`
const Button = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border: 0.1rem solid transparent;
color:var(--snowWhite);
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.35s ease-in-out;
border-radius: 1rem;
&:hover{
    background: var(--snowWhite);
    color: var(--mainBlack);
    border: 0.1rem solid var(--mainBlack);
    border-color: transparent;
    border-radius:1rem;
}
&:focus{
    outline:none;
}
`;


