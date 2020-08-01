import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import code from '../code.svg'
import styled from 'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

dom.watch()



export default class myNavbar extends Component {
    render() {
        return (
            
        <Navbar className="bgBlack navbar" role="navigation" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/products"><span className="textSnow">Products</span></Link>
                <Link className="nav-link" to="/"><span className="textSnow">Feed</span></Link>
                <Link className="nav-link" to="/socialmedia"><span className="textSnow">Socialmedia</span></Link>
                <Link className="nav-link" to="/faq"><span className="textSnow">FAQ</span></Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar className="navbar-center navbar-inner nav" role="navigation" expand="sm">
                <div class="row">
                    <div class="navbar-center navbar-inner nav">
                        <Link  to='/'>
                            <img src={code} style={{ height: 40, width:50}} alt="store" className="nav navbar-nav"/>

                        </Link>
                    </div>
                </div>
                
            </Navbar>
            <Link to='/cart' className="">
                    <Button>
                        <h5 className="mt-1"><i class="fa fa-shopping-cart" aria-hidden="true"></i> cart</h5>
                        

                    </Button>
                    </Link>
          </Navbar>
            
        )
    }
}

{/*const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color:var(--snowWhite) !important;
    font-size:1rem;
    text-transform: Capitalize;
} 
`*/}


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
letter-spacing:0.05rem;
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

