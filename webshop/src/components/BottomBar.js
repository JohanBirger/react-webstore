import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import code from '../code.svg'




export default class BottomBar extends Component {
    render() {
        return (
            <Navbar className="bgBlack fixBottom">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <ul>
                <Navbar.Brand href="/about"><span className="textSnow">JohanKoddarAB</span></Navbar.Brand>
                <Nav.Link href="/socialmedia"><span className="textSnow">Socialmedia</span></Nav.Link>
                <Nav.Link href="/contact"><span className="textSnow">Contact us</span></Nav.Link>
                <Nav.Link href="/about"><span className="textSnow">About us</span></Nav.Link>
                <Nav.Link href="/policy"><span className="textSnow">Policy</span></Nav.Link>
                
              
                </ul>
                <div className="container">
                  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>                  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>     
              </Nav>
            
              <div className="row">
                <div className="text-right pr-5">
                      <img src={code} style={{ height:100, width:80}} alt="store"/>
                        <h6>
                            <span className="finePrint"><strong><h6>🌍 Adress</h6></strong>Hallojgatan 12 </span> 
                        </h6>
                        <h6>
                            <span className="finePrint"><strong><h6>☎️ Number</h6></strong>070-1234567</span> 
                        </h6>
                        <h6>
                            <span className="finePrint"><strong><h6>✉️ Mail</h6></strong>Koddstugan@gmail.com </span> 
                        </h6>

                        <NavDropdown title="Attributes" id="nav-dropdown">
                            
                        <ul>
                            <li>
                                <a href="https://www.flaticon.com/authors/turkkub" title="turkkub"><span className="finePrintBlack">turkkub</span> </a>
                            </li>
                        </ul>
                        </NavDropdown>
                        

                  </div>
                
                  
                </div>
              
            </Navbar.Collapse>
          </Navbar>
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

const ModalContainer =styled.div`
position:relative;
left:0;
right:0;
bottom:0;
background: var(--mainDark);
display:flex;
align-items: center;
justify-content:center;
.nav-link{
    color:var(--snowWhite) !important;
    font-size:1rem;
    text-transform: Capitalize;
}
#modal{
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    padding: 3rem;
    background: var(--mainWhite);
}

`;

