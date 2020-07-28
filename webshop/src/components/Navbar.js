import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import code from '../code.svg'
import styled from 'styled-components';
import {Button} from "./Button";
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
                    <button>
                        <span className="mr-1">
                        <i className="fa fa-cart-plus" />
                        </span>
                        
                        Cart

                    </button>
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